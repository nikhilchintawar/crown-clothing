import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GTmmiFBz9W42qpZNPWAAPAnvoGJfONqSnWsOfr5YW1FT5BKIDLbAs8ZaDw9UG65zfCCoFKQwhZaCrxFgrVtRwnV00tXUDEGfc"
    
    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("payment successful")
        }).catch(error => {
            console.log(error);
            alert("There was an issue with your payment, please make sure you are using the correct credit card")            
        })           
       }
   

    return (
        <StripeCheckout
            label="Pay Now"
            name="CROWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            // image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;