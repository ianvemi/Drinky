import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetaContext = createContext();

const RecetaProvider = (props) => {
    
    const [search, addSearch] = useState({
        'name': "",
        'category':""
    })

    const {name, category} = search;

        let name_url = "i=" + name;
        let category_url = "c=" + category;
        let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Yoghurt`;
        
        if(name && !category){
            url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name_url}`;
            console.log(url);
         }else if(name && category){
             url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name_url}&${category_url}`;
             console.log(url);
         }else if(!name && category){
            url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${category_url}`;
            console.log(url);
         }

         const [drinks, addDrinks] = useState([])
    
    useEffect(()=>{

            const require = async()=>{
                const data = await axios.get(url);
                addDrinks(data.data.drinks);
            }
            require();

        

    }, [search]);


    return ( 
        <RecetaContext.Provider
        value={{
            addSearch,
            drinks
        }}
        >
            {props.children}
        </RecetaContext.Provider>
     );
}
 
export default RecetaProvider;