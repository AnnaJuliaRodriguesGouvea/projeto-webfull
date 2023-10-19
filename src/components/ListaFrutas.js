import React, { useEffect, useState, createContext} from 'react';
import FruitCard from './FruitCard'; // Importe o componente FruitCard

const FruitContext = createContext();
const ListaFrutas = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all');
            const data = await resp.json()
            setFruits(data)
        })()
    }, []);
  
    return (
        <div>
          <h1>Lista de Frutas</h1>
          <div>
            {fruits.map((fruit) => (
                <FruitContext.Provider value={{fruit}}>
                    <FruitCard key={fruit.id}/>
                </FruitContext.Provider>
            ))}
          </div>
        </div>
    );
}

export {ListaFrutas, FruitContext}