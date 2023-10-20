import React, {useEffect, useState, createContext, useContext} from 'react';
import FruitCard from './FruitCard';
import {findAll} from "../service/FruitService";
import {AppContext} from "../App";
import {Pagination} from "@mui/material"; // Importe o componente FruitCard

const FruitContext = createContext();
const ListaFrutas = () => {
    const context = useContext(AppContext)
    // useEffect(() => {
    //     (async () => {
    //         let result = await findAll()
    //         context.setPageCount(Math.ceil(result.length / context.limit))
    //         result = result.slice((context.page - 1) * context.limit, (context.limit * context.page))
    //         context.setFruits(result)
    //
    //     })()
    // }, [context.page, context.limit]);
  
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