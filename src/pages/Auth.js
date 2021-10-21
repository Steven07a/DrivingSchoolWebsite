import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


import "../styles/login.css";

export default function AuthPage() {
    //const history = useHistory();

    const [allValues, setAllValues] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        isLogin: true
    })


    const changeHandler = (e) => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    /*
    testing the routing here, need to handle login info 
    submission
    */
    const onSubmit = () => {
        console.log(allValues);
    };

    const swapForms = () => {
        setAllValues({ ...allValues, isLogin: !allValues.isLogin });
    }

    return (
        <div className="login">
            <h1 className="loginText">Welcome</h1>

            {allValues.isLogin ? <Login changeHandler={changeHandler} /> : <Signup changeHandler={changeHandler} onSubmit={onSubmit} />}
            {/*change this to a LoadingButton later */}
            {/* #TODO match size of button with input box above */}
            {/** Keep the buttons out here since state is at this level */}
            <div className="submitBtn">
                <Button
                    variant="contained"
                    type="submit"
                    onClick={onSubmit}
                >
                    Log In
                </Button>
                <Button
                    variant="contained"
                    type="button"
                    onClick={swapForms}
                >
                    Sign Up
                </Button>
            </div>
            <p className="textClick" onClick={swapForms}>
                Return to Sign In
            </p>
        </div>
    )
}