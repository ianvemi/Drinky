import React, { useContext, Fragment, useState } from "react";
import Drink from "./Drink";
import { RecetaContext } from "../Context/RecetaContext";
import { ModalContext } from "../Context/ModalContext";
 // MATERIAL UI---------------------------------------------------------->

 import { makeStyles } from "@material-ui/core/styles";
 import Modal from "@material-ui/core/Modal";
 import Grow from "@material-ui/core/Grow";
 
 
 const useStyles = makeStyles((theme) => ({
   modal: {
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     overflow:"scroll"
   }
 }));

const ListDrinks = () => {

 // MATERIAL UI---------------------------------------------------------->

 const classes = useStyles();

 const [open, setOpen] = React.useState(false);

 const { mix, addMixId, addMix } = useContext(ModalContext);

 const handleClose = () => {
   setOpen(false);
 };

 // ---------------------------------------------------------->

  const { drinks } = useContext(RecetaContext);

  const background = {
    backgroundImage: `url('${mix.strDrinkThumb}')`,
  };

  const listIngredient = (mix) =>{
    let ings = [];

    for( let i=1; i<16; i++){
      if(mix[`strIngredient${i}`]){
        ings.push(
          <li>{mix[`strIngredient${i}`]} {mix[`strMeasure${i}`]}</li>
        )
      }
    }

    console.log(ings);
    return ings;
  }

  return (
    <Fragment>
      <div className="list-drinks">
     
        {drinks.map( elemento => (
          <Drink 
          setOpen = {setOpen}
          key = {elemento.idDrink}
          elemento = {elemento} />
        ))}

      </div>

      <Modal
        className={classes.modal}
        open={open}
        onClose={() => {
          handleClose();
          addMix({});
          addMixId(null);
        }}
        >
        <Grow in={open}>
        <div className="Modal">
        <div className="modal-title">
        <h1>{mix.strDrink}</h1>
        <div className="portrait" style={background}></div>
        </div>
        <h2 className="ing-title">{mix.strGlass}</h2>
        <div className="ing">
          <h2 className="ing-title">Ingredients</h2>
          <ul className="ing-ul">
            {listIngredient(mix)}
          </ul>
        </div>
        <div className="instructions">
          <h2>instructions</h2>
          <p>{mix.strInstructions}</p>
        </div>
        <button className="close"
        onClick={ ()=>{
          handleClose();
          addMix({});
          addMixId(null);
        }}
        >close</button>
        
        </div>
        </Grow>
         
        </Modal>

    </Fragment>
  );
};

export default ListDrinks;
