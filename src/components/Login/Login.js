import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Typography, FormControl, Link } from "@mui/material";

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
            spacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12}>
                <Paper
                    elevation={5}
                    sx={{
                        p: 4,
                        padding: "4rem",
                        display: "grid",
                        
                    }}>
                    <FormControl sx={{ width: '35ch', spacing: ''}}> 
                        <Typography variant="h2"> Log In </Typography>
                        <FormTextField
                            name={"email"}
                            control={control}
                            label={"email"}
                            onChange={changeHandler}
                            
                        />
                        <FormTextField
                            name={"password"}
                            control={control}
                            label={"password"}
                            onChange={changeHandler}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Sign in
                        </Button>
                        <Link href="#">Forgot Password</Link>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid>
    )
}