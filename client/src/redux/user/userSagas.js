import {takeLatest, put, all, call} from "redux-saga/effects";
import  UserActionTypes  from "./userTypes";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { SignInSuccess, SignInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from "./userActions";


export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot  = yield userRef.get()
        yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(SignInFailure(error.message))
    }    
}

function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error.message))
    }    
};

function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error))
    }
};

function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(SignInFailure(error))
    }
};

function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

function* signUp({payload: {email, password, displayName}}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
          );      
        yield put(signUpSuccess({user, additionalData: {displayName}}));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

function* signInAfterSignUp({payload: user, additionalData}){
    yield getSnapshotFromUserAuth(user, additionalData)
};

function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, signInAfterSignUp)
};

function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGNI_IN_START, signInWithGoogle)
};

function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

function* onUserSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onUserSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}