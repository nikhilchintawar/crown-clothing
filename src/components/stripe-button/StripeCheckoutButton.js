import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GTmmiFBz9W42qpZ9Kq61gJLSiFCKqWqOjjVM8Yjfi9A1KTyuUnsLobOfgM3uUJIRO3ZC9w5zvbmM8EefnO8Erah00g35FpLK5"
    
    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CROWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;