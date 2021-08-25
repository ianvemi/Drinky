import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


//Crear context
export const CategoriasContext = createContext();

//Provider
const CategoriasProvider = (props) => {

const [cats, addCats] = useState([]);

const [ing, addIng] = useState([]);


//Categories consulting
useEffect(()=>{
    const require = async() =>{
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const data = await axios.get(url);

        const url2 = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
        const data2 = await axios.get(url2);


        addCats(data.data.drinks);
        addIng(data2.data.drinks);
    
    }
    require();
    
}, [])

// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita



return (
    <CategoriasContext.Provider
    value={{
        cats,
        ing
    }}
    >
    {props.children}

    </CategoriasContext.Provider>
)

}

export default CategoriasProvider;