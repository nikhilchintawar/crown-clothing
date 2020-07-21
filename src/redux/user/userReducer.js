import UserActionTypes from "./userTypes";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGNI_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null
            }   
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGNI_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;