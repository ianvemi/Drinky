import axios from 'axios';
import React, {createContext, useState, useEffect, Children} from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

    const [mixId, addMixId] = useState(null);

    const [mix, addMix] = useState({});


    useEffect( () => {

        const require = async()=>{
            if (!mixId) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${mixId}`
            const consult = await axios.get(url);
            addMix(consult.data.drinks[0]);
        }

        require();

    },[mixId])


    return ( 

        <ModalContext.Provider
        value={{
            mix,
        addMixId,
        addMix
            }}
        >
        {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalContextProvider;