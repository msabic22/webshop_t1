import * as actionTypes from './actionTypes';
import axios from 'axios';

let api_key = 'AIzaSyB7kzoOkl3XAWxTRIS5abw2Fyy4FeXHrAM';
let anon_endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+api_key;
let register_endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+api_key;
let login_endpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+api_key;

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token:authData.idToken,
        userId:authData.localId,
        timeout:authData.expiresIn,
        refreshToken:authData.refreshToken
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const triggerAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(logout());
        },expirationTime);
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())

        const authData={
            email:email,
            password:password,
            returnSecureToken: true
        };

        let endpoint = isSignUp ? register_endpoint : login_endpoint;

        axios.post(endpoint, authData)
            .then(response =>{
                console.log(response);
                dispatch(authSuccess(response.data));
                dispatch(triggerAuthTimeout(response.data.expiresIn*1000));
            })
            .catch(err => {
                console.log(err.response.data.error.message);
                //TODO: error handling
                dispatch(authFail(err));

            })
    };
};

