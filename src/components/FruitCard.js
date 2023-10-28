import Card from "@mui/material/Card";
import {Button, CardActions, CardMedia, Grid} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {createPortal} from "react-dom";
import NutritionCard from "./NutritionCard";

const FruitCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const {
        name,
        genus,
        family,
        order
    } = props.fruit;

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
                        {name}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '300'
                    }}>
                        <strong>Gênero:</strong> {genus}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '300'
                    }}>
                        <strong>Família:</strong> {family}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Playpen Sans',
                        fontWeight: '300'
                    }}>
                        <strong>Ordem:</strong> {order}
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
                    }} onClick={() => setShowModal(true)}>
                        Informação Nutricional
                    </Button>
                </CardActions>
                {showModal && createPortal(
                    <NutritionCard nutritions={props.fruit.nutritions} onClose={() => setShowModal(false)} />,
                    document.body
                )}
            </Card>
        </Grid>
    );
}

export default FruitCard;