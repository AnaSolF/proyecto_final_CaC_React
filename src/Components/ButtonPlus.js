import React from "react";
import { useState } from "react";
const ButtonPlus = ({ cantidad, setCantidad }) => {
 
  const incrementarCantidad = () => {
    // Incrementa la cantidad y llama a la función en el componente padre para actualizarla
    setCantidad(cantidad + 1);
  };
  const Decrement = () => {
   setCantidad(cantidad-1);
    if (cantidad <= 1) {
      setCantidad(1)
    }
  };

  return (

    <div style={{ marginBottom: "10px", textAlign: "center" }}>
      <div style={{ margin: "0 auto" }}>
      <button
        onClick={Decrement}
        style={{ margin: "5px", border: "none", background:"none" }}
      >
        -
      </button>
        
      {cantidad}
        
      <button
        onClick={incrementarCantidad}
        style={{ margin: "5px", border: "none", background:"none" }}
      >
        +
      </button>
        </div>
    </div>
  );
};

export default ButtonPlus;
