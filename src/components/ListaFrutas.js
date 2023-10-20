import React, {useEffect, useState, createContext, useContext} from 'react';
import FruitCard from './FruitCard';
import {findAll} from "../service/FruitService";
import {AppContext} from "../App"; // Importe o componente FruitCard

const FruitContext = createContext();
const ListaFrutas = () => {
    const context = useContext(AppContext)
    useEffect(() => {
        (async () => {
            context.setFruits(await findAll())
        })()
    }, []);
  
    return (
        <div>
          <h1>Lista de Frutas</h1>
          <div>
            {context.fruits.map((fruit) => (
                <FruitContext.Provider value={{fruit}}>
                    <FruitCard key={fruit.id}/>
                </FruitContext.Provider>
            ))}
          </div>
        </div>
    );
}

export {ListaFrutas, FruitContext}