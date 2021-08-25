import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListDrinks from "./components/ListDrinks";
import "./App.css";

import CategoriasProvider from "./Context/CategoriasContext";
import RecetaProvider from "./Context/RecetaContext";
import ModalContextProvider from "./Context/ModalContext";


function App() {
  
  return (
    <CategoriasProvider>
 
    <RecetaProvider>

    <ModalContextProvider>
    <div className="App">
        <div className="Header">
          <Header />
        </div>

      <div className="B-Form">
      <div className="Form">
          <Form />
        </div>
      </div>
        

        <div className="List">
          <ListDrinks/>
        </div>
      </div>

    </ModalContextProvider>
      
      </RecetaProvider>

    </CategoriasProvider>
  );
}

export default App;
