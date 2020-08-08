import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";


import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartDropdown from "./CartDropdown";
import { withRouter } from "react-router-dom";


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContainer = compose(
    withRouter,
    connect(mapStateToProps)
)(CartDropdown)

export {CartDropdownContainer};

