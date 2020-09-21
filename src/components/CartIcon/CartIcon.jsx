import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartIcon.css'; 
import { useCartContext } from '../../context/CartContext';

const CartIcon = () => {

    const { cartAmount } = useCartContext();

    return (
    <div className="ShoppingBag">
        <FontAwesomeIcon icon="shopping-bag" /> Shopping Bag: {cartAmount}
    </div>
        );
}

export default CartIcon;
