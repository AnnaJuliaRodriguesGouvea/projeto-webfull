import React, {createContext, useState} from 'react';
import Header from './components/Header';
import {ListaFrutas} from './components/ListaFrutas';
import "./NutritionCard.css"

const AppContext = createContext();
function App() {
    const [fruits, setFruits] = useState([]);
    return (
        <div>
            <AppContext.Provider value={{fruits, setFruits}}>
                <Header/>
                <ListaFrutas/>
            </AppContext.Provider>
        </div>
    );
}

export {App, AppContext};
