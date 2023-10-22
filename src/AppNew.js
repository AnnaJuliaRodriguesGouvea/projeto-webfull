import HeaderNew from "./components/HeaderNew";
import Introduction from "./components/Introduction";
import Container from "@mui/material/Container";
import InputSearch from "./components/InputSearch";
const App = () => {
    return (
        <div>
            <HeaderNew/>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Introduction/>
                <InputSearch/>
            </Container>
        </div>
    )
}

export default App;