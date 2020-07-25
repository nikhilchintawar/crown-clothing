import React, { lazy, useEffect }  from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';



import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import Spinner from '../../components/spinner/Spinner';
// import { fetchCollectionsStart } from '../../redux/shop/shopSagas';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionOverviewContainer'));
const CollectionPageContainer = lazy(() => import('./../../pages/collection/CollectionPageContainer'));


const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

        return (
        <div className="shop-page">
        <Spinner fallback={<Spinner />}>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionsOverviewContainer}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
        </Spinner>
        </div>
    )}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage);