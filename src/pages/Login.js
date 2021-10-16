import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";


import "../styles/login.css";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    /*
    testing the routing here, need to handle login info 
    submission
    */
    const onSubmit = () => {
        history.push("/")
    };



    return (
        <div className="login">
            <h1 className="loginText">Welcome</h1>
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <div className="formItem">
                    <label>Username</label>
                    <TextField {...register("username")} />
                </div>
                <div className="formItem">
                    <label>Password</label>
                    <TextField {...register("password")} />
                </div>
                {/*change this to a LoadingButton later */}
                {/* #TODO match size of button with input box above */}
                <div className="submitBtn">
                    <Button 
                    variant="contained"
                    type="submit">Log In</Button>
                </div>
            </form>
        </div>
    )


}