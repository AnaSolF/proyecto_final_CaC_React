
const ButtonPlus = ({ cantidad, setCantidad }) => {
  const incrementarCantidad = () => {
    // Incrementa la cantidad y llama a la función en el componente padre para actualizarla
    setCantidad(cantidad + 1);
  };
  const Decrement = () => {
   setCantidad(cantidad-1);
    if (cantidad <= 0) {
      setCantidad(0)
    }
  };

  return (

    <div style={{ marginBottom: "15px", textAlign: "center" }}>
      <div style={{ margin: "0 auto" }}>
      <button
        onClick={Decrement}
        style={{ margin: "5px", border: "none", background:"none" }}
      >
        -
      </button>
      
      <button
        onClick={incrementarCantidad}
        style={{ margin: "5px", border: "none", background:"none" }}
      >
        +
      </button>
        <p>Cantidad: {cantidad}</p>
        </div>
    </div>
  );
};

export default ButtonPlus;
