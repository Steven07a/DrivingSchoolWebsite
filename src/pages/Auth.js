import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { AmplifyAuthenticator, AmplifySignin } from "@aws-amplify/ui-react";

import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";


import "../styles/login.css";

export default function AuthPage() {
    // Need to reenable routing later
    //const history = useHistory();

    const [allValues, setAllValues] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        isLogin: true
    })

    /**
     * 
     * @param {*} e 
     * 
     * Updates state whenever user enters information into a text field.
     */
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

    const signIn = async (username, password) => {
        try {
            Auth.signIn({ username, password}).then((user) => {
                if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
                    Auth.completeNewPassword(user, newPassword, {}).then((user) => {
                        Auth.signIn({ username: username, password: newPassword}).then((user) => {
                            /** need to lift state up here to confirm sign in or not */
                            // user is signed in here
                        }).catch((error) => {
                            //failed to sign in 
                        })
                    })
                }
            })
        } catch (error) {
            
        }
    }

    /**
     * Swaps betwen login and sign up components
     */
    const swapForms = () => {
        setAllValues({ ...allValues, isLogin: !allValues.isLogin });
    }

    return (
        <div className="login">
            <AmplifyAuthenticator>
                <AmplifySignin />
            </AmplifyAuthenticator>
        </div>
    )
}