import React, { Fragment, useContext, useState } from "react";
import { ModalContext } from "../Context/ModalContext";


const Drink = ({ elemento, setOpen }) => {

 
  const { strDrink, strDrinkThumb} = elemento;

  const { addMixId } = useContext(ModalContext);

  const background = {
    backgroundImage: `url('${strDrinkThumb}')`,
  };


  const saveId = (id) => {
    addMixId(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (

    <Fragment>

      <div className="drink" style={background}>
        <p className="name-drink">{strDrink}</p>
        <button className="button-ing" 
        onClick={() => {
          saveId(elemento.idDrink);
          handleOpen();
      }} >
        
          How to make?<br></br> <span>{strDrink}</span>
        </button>
      </div>

    </Fragment>
  );
};

export default Drink;
