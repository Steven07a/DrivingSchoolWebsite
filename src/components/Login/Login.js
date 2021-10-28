import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { TextField, Button, Grid, Paper } from "@mui/material";

import FormTextField from "../FormTextField/FormTextField";

//TODO: need to split this off into it's own thing
import "../../styles/login.css";

export default function Login({
    changeHandler
}) {
    //using the material ui + react hook form library
    const { handleSubmit, reset, control } = useForm();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={2}>
                <Paper 
                elevation={3}
                sx={{ p: 4}}>
                    <form>
                        <h2> Login </h2>
                        <Controller
                            name={"Email"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField onChange={onChange} value={value} label={"Email"} />
                            )}
                        />
                        <Controller
                            name={"Password"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField onChange={onChange} value={value} label={"Password"} />
                            )}
                        />
                        <FormTextField
                            name={"test"}
                            control={control}
                            label={"test"}
                            />
                    </form>
                </Paper>
            </Grid>
        </Grid>
        // <form className="formContainer">
        //     <h1>Sign in</h1>
        //     <div className="formItem">
        //         <label>Username</label>
        //         <TextField {...register("username")}
        //         name="username"
        //         onChange= {changeHandler} />
        //     </div>
        //     <div className="formItem">
        //         <label>Password</label>
        //         <TextField {...register("password")}
        //         name="password"
        //         onChange= {changeHandler}/>
        //     </div>
        //     <Button type="button" color="primary" className="login-button">
        //         Sign in
        //     </Button>
        // </form>
    )
}