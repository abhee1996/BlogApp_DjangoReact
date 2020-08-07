import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = ()=>{
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token  =>{
    return {

        type: actionTypes.AUTH_SUCCESS,
        token:token
    }
}

export const authFail = error =>{
    return {
        type: actionTypes.AUTH_FAIL,
        error:error
    }
}
export const logout=()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_LOGOUT,
        
    }
    this.props.history.push("/")
}
//setting a timer to check when the logout take place
export const checkAuthTimeOut = expirationTime =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime * 1000)
    }
}

// login take username and password 
export const authLogin = (username,password) => {
    return dispatch=>{
        //on login dispatching authStart
        dispatch(authStart());
        //and post it into the database
        axios.post('http://127.0.0.1:8000/rest-auth/login/',{
            username :username,
            password:password
        })
        .then(res =>{
            //response stored in the localStorage
            const token = res.data.key;
            const expirationDate =new Date(new Date().getTime() + 3600 * 1000);
            //Store the data first in browser local storage
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            //dispatching auth success
            dispatch(authSuccess(token));
            //dispatching check timeout  or logout
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err=>{
            dispatch(authFail(err));
        })
    }
}

export const authSignUp = (username,email,password1,password2)=>{
    return dispatch=>{
        dispatch(authStart());
        //and post it into the database
        axios.post('http://127.0.0.1:8000/rest-auth/registration/',{
            username :username,
            email:email,
            password1:password1,
            password2:password2
        })
        .then(res =>{
            //get response will stored in the localStorage
            const token = res.data.key;
            const expirationDate =new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            //dispatching auth success
            dispatch(authSuccess(token));
            //dispatching check timeout  or logout
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err=>{
            dispatch(authFail(err));
        })
    }
}


export const authCheckState = () =>{

    return dispatch=>{
        const token = localStorage.getItem('token');
        if (token === undefined){
            dispatch(logout());
        }else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());

            }else{
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeOut(

                    (expirationDate.getTime() - new Date().getTime()) / 1000)
                
                );
            }
        }

    }
}