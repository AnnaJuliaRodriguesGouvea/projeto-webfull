import HeaderNew from "./components/HeaderNew";
import Introduction from "./components/Introduction";
import Container from "@mui/material/Container";
const App = () => {
    return (
        <div>
            <HeaderNew/>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Introduction/>
            </Container>

        </div>
    )
}

export default App;