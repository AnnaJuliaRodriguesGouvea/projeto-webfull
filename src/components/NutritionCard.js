import Container from "@mui/material/Container";

const NutritionCard = (props) => {
    const { carbohydrates, protein, fat, calories, sugar } = props.nutritions
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
            backgroundColor: 'white',
            border: '2px solid rgb(240, 240, 240)',
            borderRadius: '12px',
            position:  'absolute',
            width: '250px',
            top: '70px',
            left: 'calc(50% - 125px)',
            bottom: '70px'
        }}>
            <ul>
              <li>Carbohydrates: {carbohydrates}g</li>
              <li>Protein: {protein}g</li>
              <li>Fat: {fat}g</li>
              <li>Calories: {calories}</li>
              <li>Sugar: {sugar}g</li>
            </ul>
            <button onClick={props.onClose}>Close</button>
        </Container>
    );
}

export default NutritionCard