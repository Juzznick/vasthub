import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./firebase.js";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="forgot-div">
            <h1>Forgot Password</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <p>Enter the email id</p>
                <input className="forgot-input" name="email" />
                <button className="forgot-button">Reset</button>
            </form>
        </div>
    )
}
export default ForgotPassword;