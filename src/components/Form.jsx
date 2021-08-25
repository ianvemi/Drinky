import React, {useContext, useState, Fragment} from 'react';
import { CategoriasContext } from '../Context/CategoriasContext';
import { RecetaContext } from '../Context/RecetaContext';



const Form = () => {

    const {cats, ing} = useContext(CategoriasContext);

    const {addSearch} = useContext(RecetaContext);



    const [ingredient, addIngredient] = useState({
        'name' : "",
        'category': ""
        
    })

 

    const [selected, addSelected] = useState({
        'name' : "",
        'category': ""
    })

    //Guardar datos
    const saveSearch = (e) =>{
        addIngredient({
            // ...ingredient,
            [e.target.name] : e.target.value
        })
    }

    const [option, addOption] = useState("Choose an ingredient");

    const changeOption = ()=>{
        document.getElementById('o-ingredient').selectedIndex = "0";
        document.getElementById('o-category').selectedIndex = "0";

    }

    const changeCat = ()=>{
        document.getElementById('o-category').selectedIndex = "0";
    }

    const changeIng = ()=>{
        document.getElementById('o-ingredient').selectedIndex = "0";
    }
    
    
    

  


    return ( 

        <Fragment>
        <form
        onSubmit={e => {
            e.preventDefault();
            addSearch(ingredient);
            addSelected(ingredient);
            addIngredient({
             'name' : "",
             'category': ""
            })
      
        }}
        >
           
            <select id="o-ingredient"
            name="name"
            onChange={(e)=>{ changeCat(); saveSearch(e);  }}
           
            >
            <option selected disabled>{option}</option>
    
                {ing.map((elemento)=>(
                    <option 
                    key={elemento.strIngredient1}
                    >{elemento.strIngredient1}</option>
                ))}

            </select>

            <p className="or">OR</p>

            <select id="o-category"
            name="category"
            onChange={(e)=>{ changeIng(); saveSearch(e);  }}
            >
            <option selected disabled>Type of drink</option>
    
                {cats.map((elemento)=>(
                    <option 
                    key={elemento.strCategory}
                    >{elemento.strCategory}</option>
                ))}

            </select>

            <button 
            type="submit"
            onClick={()=>{
                changeOption();
            }}
            >
            SEARCH DRINKS
            </button>
            
        </form>

        <div className="animation-water">
        {selected.name || selected.category
        ?<p className="selected">{selected.name} {selected.category}</p>
        :<p className="selected">Find your drinks</p>} 
        
        
        
        <div className="waves"></div>
        </div>
        
        </Fragment>
        
     );
}
 
export default Form;