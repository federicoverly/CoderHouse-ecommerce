import React, { useState } from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore } from '../../firebase';

// Empty Cart Component
const EmptyCart = () => {
    return (
        <div className="container">
            <div className="row empty_cart">
                <h5> Looks like you have not decided yet! Take a look at my designs
                    <NavLink to={'/'} style={{ textDecoration: 'none', color: "#222222" }}> here!</NavLink>
                </h5>
            </div>
        </div>
    );
}

// Full Cart Component
const FullCart = () => {
    const { cart, deleteFromCart } = useCartContext();

    return (
        <div className="container cart_container">
            <div className="row cart_container">
             {cart.map(i =>
                <div className="buying_item_container">
                        <div className="col cart_container  ">
                            <h4 className="buying_item_container_title">{i.name}</h4>
                        </div>
                        <div className="col cart_container ">
                            <div className="buying_item_container_image"><img src={i.imageID} alt=""/></div>
                        </div>
                        <div className="col cart_container ">
                            <h4 className="buying_item_container_price">€ {i.price}</h4>
                        </div>
                        <div className="col cart_container ">
                            <h4 className="buying_item_container_amount">{i.amount}</h4>
                        </div>
                        <div className="col cart_container ">
                            <h4 className="buying_item_container_color">{i.color}</h4>
                        </div>
                        <div className="col cart_container ">
                            <h4 className="buying_item_container_color">{i.size}</h4>
                        </div>
                        <div className="col cart_container ">
                            <h4 className="buying_item_container_total">€ {(i['amount']*i['price'])}</h4>
                        </div>
                        <div className="col buying_item_container_delete ">
                            <FontAwesomeIcon icon="times" className="times_icon" onClick={ ()=> deleteFromCart(i)}/>
                        </div>
                </div>
             )}
            </div>
        </div>
        
    );
}

// Total Amount Component
const CartTotal = ( {checkoutFunction} ) => {

    const { cart } = useCartContext();

    let total = 0 
    for ( const i of cart ){
        total = total + i['amount']*i['price']
    }
    
    return (
        <div className="container cart_container">
                <div class="row">
                    <div className="col-7 paying_container">
                        <h3 className="shopping_bag_total">Total: € {total}</h3>
                    </div>
                    <div className="col-5 paying_container">
                        <button type="button" className="btn btn-secondary pay_button" onClick={ () => checkoutFunction()}>Proceed to payment</button>
                    </div>
                </div>
        </div>
    );
}

// Checkout Component
const CheckoutComponent = ( {takeCheckout} ) => { 
    const { cart, clearCart } = useCartContext();
    const [userName, setUserName ] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")

    async function createOrder() {

        const db = getFirestore();
     
        const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', cart.map( i => i.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        query.docs.forEach((docSnapshot, id) => {
            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[id].amount })
        })

        batch.commit().then(r => r)

        const orders = db.collection('orders')
        const buyer= {name:userName, phone:userPhone, email: userEmail}       
        const items =  cart.map ( i => ({ id: i.id, name: i.name, price: i.price, amount: i.amount, size: i.size, color: i.color}) )

        let total = 0 
        for ( const i of cart ){
            total = total + i['amount']*i['price']
        }
        
        const price = total
    
        const newOrder = {
                buyer: buyer,
                items: items,
                price: price,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                };
        
        try {
            const { id } = await orders.add(newOrder);
            console.log(id);
            alert('We are preparing your order. In case you need anything, remember your id is:' + id)
            } catch(err) {
                console.log('Looks like there is a mistake ')
            };   

        clearCart();

        takeCheckout();      
    }

    return(
        <>
        <div className="checkout_form">
        <div className="container">
        <div class="row">
            <div className="col-7">
                <form  className="form_container">
                    <label htmlFor="fname">Name: </label>
                      <input type="text" id="fname" placeholder="Name"  onInput={(evt) => setUserName(evt.target.value)} /><br/>
                    <label htmlFor="fphone">Phone: </label>
                      <input type="text" id="fphone" placeholder="Phone Number" required onInput={(evt) => setUserPhone(evt.target.value)}/><br/>
                    <label htmlFor="femail">Email: </label>
                      <input type="text" id="femail" placeholder="Email" required onInput={(evt) => setUserEmail(evt.target.value)}/><br/>
                    <label htmlFor="femailconf">Confirm Email: </label>
                     <input type="text" id="femailconf" placeholder="Confirm Email" onInput={(evt) => setConfirmEmail(evt.target.value)}/><br/>
                </form>
            </div>
            <div className="col-5 button_container">
               <button type="submit" className="btn btn-secondary checkout_button" onClick={createOrder} 
                disabled={ userEmail !== confirmEmail || userName === "" || userPhone === "" || userEmail === ""
                 }>
                    Yes! Give me my order!</button>
            </div>        
        </div>   
        </div>
        </div>
        </>
    )
}

// Cart Component
const Cart = () => {
    const { cartAmount } = useCartContext();
    const [checkout, setCheckout] = useState(false)
    
    const cart_check = cartAmount === 0

    // Checkout Function
    function checkoutFunction () {
        setCheckout(true)
        console.log("Loading checkout")
    }

    // Clear Checkout Function
    function takeCheckout(){
        setCheckout(false)
    }

    return(
        <>        
        <div className="container cart_container">
            <div className="row">
                <div className="col">
                    <h3 className="shopping_bag">My Shopping Bag</h3>
                </div>
            </div>
        </div>
        { cart_check && <EmptyCart /> }
        { !cart_check && <FullCart /> }
        { !cart_check && <CartTotal checkoutFunction={checkoutFunction} /> }
        { checkout && <CheckoutComponent takeCheckout={takeCheckout} /> }
        </>
    );
};

export default Cart;
