import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';

import { CollectionPageContainer, CollectionPageTitle, CollectionItemContainer } from './collectionpage.styles';


const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionItemContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} /> )
                }
            </CollectionItemContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);