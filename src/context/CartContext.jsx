import React, {useState, useContext} from 'react';

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

export function CartProvider ({ children }) {   
    const [ cart, setCart ] = useState([]);
    const [ cartAmount, setCartAmount ] = useState(0);

    function addToCart (newItem, count, size, color){
        const new_it = { id: newItem.id, name: newItem.name, imageID: newItem.imageID, amount: count, price: newItem.price, color: color, size: size }
        const newAmount = cartAmount + count

        if (cart.map(i => i.id).includes(new_it.id)){
            const i = cart.find(i => i.id === new_it.id)
            if (i.color === new_it.color && i.size === new_it.size){
                const item = cart.find(i => i.id === newItem.id);
                item['amount'] = item['amount']+count
            }
            else {
                const n = [...cart, new_it]
                setCart(n);
            }          
        } else {
            const n = [...cart, new_it]
            setCart(n);
        }
        setCartAmount(newAmount);
    };

    function deleteFromCart (oldItem){
        const n = cart.filter(i => i.id !== oldItem.id);
        setCart(n);
        setCartAmount(cartAmount-oldItem.amount)
    }

    function clearCart(){
        setCart([])
        setCartAmount(0)
    }
     return <CartContext.Provider value={{ cart, cartAmount, addToCart, deleteFromCart, clearCart }}>
      {children}
    </CartContext.Provider>

};