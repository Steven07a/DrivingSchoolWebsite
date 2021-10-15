import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";


import "../styles/login.css";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <div className="login">
            <h1 className="loginText">Login</h1>
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <div className="formItem">
                    <label>Username</label>
                    <TextField {...register("username")} />
                </div>
                <div className="formItem">
                    <label>Password</label>
                    <TextField {...register("password")} />
                </div>
            </form>
        </div>
    )


}