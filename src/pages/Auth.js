import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
//import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import { Grid } from "@mui/material";


import Login from "../components/Login/Login";
import "../styles/login.css";

// should probably add custom theme from mui here

export default function AuthPage() {
    // Need to reenable routing later
    //const history = useHistory();

    const [allValues, setAllValues] = useState({
        email: "",
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
        console.log(allValues);
    }

    return (
        <Grid container spacing={0}>
            <Login changeHandler={changeHandler}></Login>
        </Grid>
    )
}