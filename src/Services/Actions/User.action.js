import { SIGNIN_FAIL, SIGNIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../Consts/Action.type";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth } from '../../Firebase';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const SignUpSuccess = (data) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}

export const SignUpFail = (err) => {
    return {
        type: SIGNUP_FAIL,
        payload: err
    }
}

export const SignUpwithemailFirebase = (email,password) => {

    return dispatch => {
        createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
            console.log(userCredential.user,"usercredential");
            dispatch(SignUpSuccess(userCredential.user))
        }).catch((err) => {
            console.log(err.code,"err");
            dispatch(SignUpFail(err.code))
        })
    }
}

export const SignInSuccess = (data) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: data
    }
}

export const SignInFail = (err) => {
    return {
        type: SIGNIN_FAIL,
        payload: err
    }
}

export const SignInwithemailFirebase = (email,password) => {

    return dispatch => {
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            console.log(userCredential.user,"user");
            dispatch(SignInSuccess(userCredential.user))
        }).catch((err) => {
            console.log(err.code,"err");
            dispatch(SignInFail(err.code))
        })
    }
}

export const SignInWithGoogleFirebase = () => {

    return dispatch => {
        signInWithPopup(auth,provider).then((userCredential) => {
            dispatch(SignInSuccess(userCredential.user))
        }).catch((err) => {
            dispatch(SignInFail(err.code))
        })
    }
}