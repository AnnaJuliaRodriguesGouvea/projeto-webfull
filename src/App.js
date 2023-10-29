import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Container from "@mui/material/Container";
import InputSearch from "./components/InputSearch";
import FruitCard from "./components/FruitCard";
import React, {createContext, useEffect, useState} from "react";
import {Grid, Pagination} from "@mui/material";

export const AppContext = createContext();

const App = () => {
    const [fruits, setFruits] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [pageCount, setPageCount] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
        setShowModal(false)
    }
    const handleOnClick = () => {
        if (showModal)
            onClose()
    }

    useEffect(() => {
        setPageCount(pageCount);
    }, [pageCount]);

    return (
        <div onClick={handleOnClick}>
            <AppContext.Provider value={{
                fruits, setFruits,
                page, setPage,
                limit, setLimit,
                pageCount, setPageCount,
                showModal, setShowModal,
                onClose
            }}>
                <Header/>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Introduction/>
                    <InputSearch/>
                </Container>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginY: '2%'
                }}>
                    <Grid container spacing={3}>
                        {fruits.map((fruit) => (
                            <FruitCard key={fruit.id} fruit={fruit}/>
                        ))}
                    </Grid>
                </Container>
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginY: '2%'
                }}>
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={(event, newPage) => setPage(newPage)}
                        variant="outlined"
                        shape="rounded"
                        color="primary"
                    />
                </Container>
            </AppContext.Provider>
        </div>
    )
}

export default App;