import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {FruitContext} from "./ListaFrutas";
import {createPortal} from "react-dom";
import NutritionCard from "./NutritionCard";

const FruitCard = () => {
  const context = useContext(FruitContext)
  const [showModal, setShowModal] = useState(false);
  
  const {
    genus,
    name,
    family,
    order,
    nutritions: { carbohydrates, protein, fat, calories, sugar },
  } = context.fruit;

  return (
    <Card>
      <CardContent>
        <button onClick={() => setShowModal(true)}>
          {name}
        </button>
        {showModal && createPortal(
            <NutritionCard onClose={() => setShowModal(false)} />,
            document.body
        )}
        <Typography color="textSecondary">Genus: {genus}</Typography>
        <Typography color="textSecondary">Family: {family}</Typography>
        <Typography color="textSecondary">Order: {order}</Typography>
      </CardContent>
    </Card>
  );
};

export default FruitCard;
