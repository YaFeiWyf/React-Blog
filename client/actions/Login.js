/**
 * Created by wyf on 2016/10/29.
 */
import {LOGIN_SUCCESS, LOGIN_FAIL,LOG_OUT} from '../constants/LoginActions';
import fetch from 'isomorphic-fetch';

export function login(values, callback) {
    return (dispatch)=>{
        "use strict";
        fetch('/login',{
            method:'POST',
            mode:'cors',
            Origin:'*',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
            .then(response=>response.json())
            .then(json=>{
                if(json.is_success){
                    dispatch(loginSuccess(json.authCookie));
                    callback();
                }else {
                    dispatch(loginFail());
                }
            })
            .catch(e=>console.log(e));
    }
}

export function loginSuccess(authCookie){
    return {
        type:LOGIN_SUCCESS,
        authCookie
    }
}

export function loginFail(){
    return {
        type:LOGIN_FAIL
    }
}

export function logOut(){
    return {
        type:LOG_OUT
    }
}