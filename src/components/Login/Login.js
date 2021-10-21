import React from 'react';
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

//TODO: need to split this off into it's own thing
import "../../styles/login.css";

export default function Login({
    changeHandler
}) {
    //using the material ui + react hook form library
    const { register } = useForm();

    return (
            <form className="formContainer">
                <div className="formItem">
                    <label>Username</label>
                    <TextField {...register("username")}
                    name="username"
                    onChange= {changeHandler} />
                </div>
                <div className="formItem">
                    <label>Password</label>
                    <TextField {...register("password")}
                    name="password"
                    onChange= {changeHandler}/>
                </div>
            </form>
    )
}