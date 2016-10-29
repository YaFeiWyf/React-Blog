/**
 * Created by wyf on 2016/10/29.
 */
import {LOGIN_SUCCESS, LOGIN_FAIL,LOG_OUT} from '../constants/LoginActions';
const initState = {
    is_login:false,
    authCookie:''
};

function loginSuccess(state, authCookie){
    "use strict";
    return Object.assign({}, state, {is_login:true, authCookie:authCookie});
}

function logOut(state) {
    return Object.assign({},state,initState);
}

export default function login(state=initState, action){
    switch (action.type){
        case LOGIN_SUCCESS:
            return loginSuccess(state, action['authCookie']);
        case LOGIN_FAIL:
            return state;
        case LOG_OUT:
            return logOut(state);
        default:
            return state;
    }
}