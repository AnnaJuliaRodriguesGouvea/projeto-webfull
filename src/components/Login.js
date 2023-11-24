import React, {useContext, useState} from "react";
import Container from "@mui/material/Container";
import {Button, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {AppContext} from "../App";

const Login = () => {
    const { setAuthenticated } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implemente a lógica de autenticação aqui
        setAuthenticated(true)
    };

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
            <Paper sx={{ width: '500px', height: '500px', padding: '20px', backgroundColor: '#E8E1D9', boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '500',
                        fontSize: '32px',
                        marginBottom: '50px',
                        color: '#125C13'
                }}>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: '20px' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    sx={{
                        backgroundColor: '#125C13',
                        color: '#FFF',
                        fontFamily: 'Playpen Sans',
                        fontWeight: '500',
                        borderRadius: 5,
                        fontSize: '12px',
                        width: '100%',
                        height: '10%',
                        '&:hover': {
                            backgroundColor: '#F5F3F2',
                            color: '#125C13'
                        }
                }}>
                    Login
                </Button>
            </Paper>
        </Container>
    );
};

export default Login;
