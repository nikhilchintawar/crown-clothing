import {put, takeLatest, call, all} from "redux-saga/effects";
import ShopActionTypes from "./shopTypes";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shopActions";


function* fetchCollectionsStartAsync(){
    try{
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collecctionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collecctionsMap));

    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
};


export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLETIONS_START, fetchCollectionsStartAsync);
};

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
};
