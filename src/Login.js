import React from 'react'
import { Button } from "@material-ui/core"
import "./Login.css"
import {provider } from './firebase'
import { getAuth, signInWithPopup} from "firebase/auth";
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';
const Login = () => {
    const [{},dispatch] =useStateValue();
    const signIn = () => {
        const auth = getAuth();
signInWithPopup(auth, provider)
.then((result)=>{
    dispatch({
        type: actionTypes.SET_USER,
        user:result.user,
    })
})
.catch((err)=>alert(err))
    }
    return (
        <div className="login">
            <div className="loginContainer">
                <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" alt="loginLogo" />
                <h1>Sign in to WhatsApp</h1>
                <Button className='loginButton' onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}
export default Login