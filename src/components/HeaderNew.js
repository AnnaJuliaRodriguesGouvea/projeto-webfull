import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const HeaderNew = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#125C13', height: '80px', justifyContent: 'center' }} >
            <Container maxWidth="xl" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Toolbar disableGutters>
                    <FoodBankIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '300%' }} />
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'Playpen Sans',
                            fontWeight: '500',
                            letterSpacing: '.2rem'
                        }}
                    >
                        FRUITYVICE
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default HeaderNew;