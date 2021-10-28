import React from "react";
//import { useHistory } from "react-router-dom";
//import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import { Grid } from "@mui/material";


import Login from "../components/Login/Login";
import "../styles/login.css";

export default function AuthPage() {
    // Need to reenable routing later
    //const history = useHistory();

    // const [allValues, setAllValues] = useState({
    //     username: "",
    //     password: "",
    //     firstName: "",
    //     lastName: "",
    //     isLogin: true
    // })

    /**
     * 
     * @param {*} e 
     * 
     * Updates state whenever user enters information into a text field.
     */
    // const changeHandler = (e) => {
    //     setAllValues({ ...allValues, [e.target.name]: e.target.value })
    // }

    return (
        <Grid container spacing={0}>
            <Login></Login>
        </Grid>
    )
}