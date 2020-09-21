import React from 'react';
import './AddtoCart.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../../context/CartContext';

const AddtoCart = ( { item, count, min, size, color } ) => {
    const { addToCart } = useCartContext();

    return(
        <>
        <button type="button" className="add_cart" disabled={count<min || size === "" || color === ""}
        onClick={() => addToCart(item, count, size, color )}>
        <p> Add {count} to <FontAwesomeIcon icon="shopping-bag" /></p>
        </button>
        </>
    );
}

export default AddtoCart;
