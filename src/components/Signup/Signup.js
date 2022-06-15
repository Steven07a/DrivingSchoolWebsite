import React from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

//TODO: need to split this off into it's own thing
import "../../styles/login.css";

export default function Signup({
    changeHandler,
    onSubmit
}) {
    const { register } = useForm();

    return (
        <form className="formContainer">
            <div className="formItem">
                <label>Username</label>
                <TextField {...register("username")}
                    name="username"
                    onChange={changeHandler} />
            </div>
            <div className="formItem">
                <label>Password</label>
                <TextField {...register("password")}
                    name="password"
                    onChange={changeHandler} />
            </div>
            <div className="formItem">
                <label>First Name</label>
                <TextField {...register("firstName")}
                    name="firstName"
                    onChange={changeHandler} />
            </div>
            <div className="formItem">
                <label>Last Name</label>
                <TextField {...register("lastName")}
                    name="lastName"
                    onChange={changeHandler} />
            </div>
            <div className="formItem">
                <label>Email</label>
                <TextField {...register("email")}
                    name="lastName"
                    onChange={changeHandler} />
            </div>
            <div className="formItem">
                <Button type="submit" variant="contained" color="primary">Sign Up</Button>
            </div>
        </form>
    )
}