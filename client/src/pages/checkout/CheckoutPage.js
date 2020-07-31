import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from "./../../redux/cart/cartSelectors";
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeCheckoutButton';

import { CheckoutPageContainer, CheckoutPageHeader, CheckoutPageHeaderBlock, TotalContainer, WarningContainer } from './checkout.styles';


const CheckoutPage = ({cartItems, total}) => {
    return (
        <CheckoutPageContainer>
            <CheckoutPageHeader>
                <CheckoutPageHeaderBlock>
                    <span>Product</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Description</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Quantity</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Price</span>
                </CheckoutPageHeaderBlock>
                <CheckoutPageHeaderBlock>
                    <span>Remove</span>
                </CheckoutPageHeaderBlock>
            </CheckoutPageHeader>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
            }
            <TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>
            <WarningContainer>
                *please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - EXP: future date - CVV: 123
            </WarningContainer>

            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);