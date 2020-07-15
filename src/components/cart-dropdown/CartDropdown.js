import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import "./cart-dropdown.styles.scss";
import CustomButton from "./../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length ? 
                (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )))
                :
                (
                    <span className="empty-message">Your cart is empty.</span>
                )
            }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});



export default withRouter(connect(mapStateToProps)(CartDropdown));