import React from 'react'
import { Button } from "@material-ui/core"
import "./Login.css"
const Login = () => {
    const signIn=()=>{
        console.log("Sign IN")
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