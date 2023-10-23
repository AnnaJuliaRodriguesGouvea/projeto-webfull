import Card from "@mui/material/Card";
import {Button, CardActions, CardMedia, Grid} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const FruitCardNew = () => {
    return (
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Card sx={{ maxWidth: 345, margin: '1%', padding: '1%' }}>
                <CardMedia
                    sx={{ height: 100 }}
                    image="frutas.jpg"
                    alt="Imagem Fruta"
                />
                <CardContent>
                    <Typography sx={{
                        textAlign: 'center',
                        fontFamily: 'Playpen Sans',
                        fontWeight: '500'
                    }}>
                        Nome Fruta
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '300'
                    }}>
                        Genêro
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '300'
                    }}>
                        Família
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '300'
                    }}>
                        Ordem
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button sx={{
                        backgroundColor: '#125C13',
                        color: '#FFF',
                        fontFamily: 'Playpen Sans',
                        fontWeight: '500',
                        borderRadius: 5,
                        fontSize: '12px',
                        padding: '3%',
                        width: '80%',
                        '&:hover': {
                            backgroundColor: '#FFF',
                            color: '#125C13'
                        }
                    }}>
                        Informação Nutricional
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default FruitCardNew;