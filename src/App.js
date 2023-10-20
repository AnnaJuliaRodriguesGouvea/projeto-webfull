import React, {createContext, useEffect, useState} from 'react';
import Header from './components/Header';
import {ListaFrutas} from './components/ListaFrutas';
import "./NutritionCard.css"
import {Pagination} from "@mui/material";

const AppContext = createContext();
function App() {
    const [fruits, setFruits] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        setPageCount(pageCount);
    }, [pageCount]);

    return (
        <div>
            <AppContext.Provider value={{
                fruits, setFruits,
                page, setPage,
                limit, setLimit,
                pageCount, setPageCount
            }}>
                <Header/>
                <ListaFrutas/>
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={(event, newPage) => setPage(newPage)}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                />
            </AppContext.Provider>
        </div>
    );
}

export {App, AppContext};
