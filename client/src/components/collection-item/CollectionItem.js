import React from 'react';
import { connect } from 'react-redux';

import {CollectionItemContainer,CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer, AddButton} from "./collection-item.styles";
import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../redux/cart/cartActions';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item
    return (
        <CollectionItemContainer>
            <BackgroundImage
                className="image"
                imageUrl={imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>Add To Cart</AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);