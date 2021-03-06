import React, { lazy, useEffect, Suspense }  from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';



import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import Spinner from '../../components/spinner/Spinner';
// import { fetchCollectionsStart } from '../../redux/shop/shopSagas';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionOverviewContainer'));
const CollectionPageContainer = lazy(() => import('./../../pages/collection/CollectionPageContainer'));

// import CollectionsOverviewContainer from "../../components/collections-overview/CollectionOverviewContainer";
// import CollectionPageContainer from "./../../pages/collection/CollectionPageContainer";
// import WithSpinner from '../../components/with-spinner/WithSpinner';

// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverviewContainer);
// const CollecctionPageWithSpinner = WithSpinner(CollectionPageContainer);

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

        return (
        <Suspense fallback={<Spinner />}>
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                />
            </div>
        </Suspense>
    )}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage);