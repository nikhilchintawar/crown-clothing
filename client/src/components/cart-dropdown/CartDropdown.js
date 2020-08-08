import React from 'react';

import CustomButton from "./../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import { CartDropdownContainer, CartItemsContainer,EmptyMessageContainer } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
            {
                cartItems.length ? 
                (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )))
                :
                (
                    <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
                )
            }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    );
};


export default CartDropdown;