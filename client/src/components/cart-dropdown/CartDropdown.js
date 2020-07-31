import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from "./../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
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

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});



export default withRouter(connect(mapStateToProps)(CartDropdown));