import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const inititalState = {
    token:null,
    userId:null,
    error:null,
    loading:false,
    refreshToken:null,
    timeout:null,
    isLoggedIn:false
};

const authStart = (state, action) => {
    return updateObject(state, {
        error:null, 
        loading:true
    })
};
const authFail = (state, action) => {
    return updateObject(state, {
        error:action.error, 
        loading:false
    })
};
const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false,
        refreshToken:action.refreshToken,
        timeout:action.timeout
     } );
};

const logout = (state) => {
    return inititalState;
}

const reducer = (state = inititalState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state,action);
        case actionTypes.AUTH_FAIL: return authFail(state,action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state,action);
        case actionTypes.LOGOUT: return logout(state);
        default: return state
    }
};

export default reducer;