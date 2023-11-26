import Login from "./components/Login";
import React, {createContext, useEffect, useState} from "react";
import Page from "./components/Page";

export const AppContext = createContext();

const App = () => {
    const [fruits, setFruits] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [pageCount, setPageCount] = useState(1);
    const [showNutritionCard, setShowNutritionCard] = useState(false);
    const [showInsertFruit, setShowInsertFruit] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setPageCount(pageCount);
    }, [pageCount]);

    useEffect(() => {
    }, [authenticated, localStorage]);

    return (
        <div>
            <AppContext.Provider value={{
                fruits, setFruits,
                page, setPage,
                limit, setLimit,
                pageCount, setPageCount,
                showNutritionCard, setShowNutritionCard,
                showInsertFruit, setShowInsertFruit,
                authenticated, setAuthenticated
            }}>
                {localStorage.getItem("token") ? (
                    <Page/>
                ) : (
                    <Login/>
                )}
            </AppContext.Provider>
        </div>
    )
}

export default App;
