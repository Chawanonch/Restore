import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import agent from '../../app/api/agent';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './accountSlice';
import { history } from "../..";

const theme = createTheme();

export default function Login() {
    const dispatch = useAppDispatch();

    const { register, handleSubmit, formState: { isSubmitting, errors, isValid }, } = useForm<{ username: ""; password: "" }>({ mode: "onChange" });

    //FieldValues คือ ค่าทั้งหมดภายใน Form
    async function submitForm(data: FieldValues) {
        try {
            await dispatch(signInUser(data));
            history.push("/catalog"); //มาจาก index.tsx
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component={Paper}
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(submitForm)}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            label="User name"
                            autoFocus
                            {...register("username", { required: "Username is required" })}
                            error={!!errors.username}
                            helperText={errors?.username?.message}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            error={!!errors.password}
                            helperText={errors?.password?.message}
                        />
                        <LoadingButton
                            disabled={!isValid}
                            loading={isSubmitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </LoadingButton>
                        <Grid container>

                        </Grid>
                    </Box>

                </Box>
            </Container>
        </ThemeProvider>
    );
}