import {useContext} from "react";
import {FruitContext} from "./ListaFrutas";

const NutritionCard = ({onClose}) => {
    const context = useContext(FruitContext)
    const { carbohydrates, protein, fat, calories, sugar } = context.fruit.nutritions
    return (
        <div className="modal">
            <ul>
              <li>Carbohydrates: {carbohydrates}g</li>
              <li>Protein: {protein}g</li>
              <li>Fat: {fat}g</li>
              <li>Calories: {calories}</li>
              <li>Sugar: {sugar}g</li>
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default NutritionCard