import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { CartIconContainer, ShoppingIconSVG, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconSVG className="shopping-icon" />
            <ItemCountContainer>{itemCount}</ItemCountContainer>          
        </CartIconContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);