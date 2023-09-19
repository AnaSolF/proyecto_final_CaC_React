import { createContext, useContext } from "react";
import { useState } from "react";
import getInitialState from "./maincontext";
import React from "react";

const maincontextState = React.createContext([{}, () => {}]);
export const useMainContextProvider = () => useContext(maincontextState);
export default function MainContextProvider({ children }) {
  const [context, setContext] = useState(getInitialState());

  // const [carrito, setCarrito] = useState([]);

  // const NuevoCarrito = (carrito) => {
  //     setContext({...context, ['carrito'] : carrito })
  // }

  const setDarkMode = (darkMode) => {
    setContext({ ...context, ["darkMode"]: darkMode });
  };

  //agrego función para setear isLoggedIn

  // const setIsLoggedIn = (isLoggedIn) => {
  //   setContext({ ...context, ["isLoggedIn"]: isLoggedIn });
  // };

  // //agrego función para setear username

  // const setUsername = (username) => {
  //   setContext({ ...context, ["username"]: username });
  // };

  ///////////////////////////////////////////////////////////////

  //Carrito LOGICA
  const [cart, setCart] = useState([]);

  //Agregar producto

  function agregar() {
    var producto = { id: 1, nombre: "Jamón", precio: 20 };
    //var prod = { id: 1, nombre: "Jamón", precio: 20 }
    var prod = { id: 2, nombre: "Papas", precio: 10 };
    cart.push(producto)
      setCart(cart);
    console.log(cart)  
    alert("Agregaste: " + " " + producto.nombre)
  }
  //vaciar carrito

  const clearCart = () => setCart([]);

  //Saber si hay un producto en el carrito
  const inCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  //Remover un producto
  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  //Prueba
  const prueba = () => {
    console.log("Funciona");
  };
  //Pasamos las funciones al provider
  return (
    <>
      <maincontextState.Provider
        value={{
          darkMode: context.darkMode,
          setDarkmode: setDarkMode,
          isLoggedIn: context.isLoggedIn,
          username: context.username,
          cart: context.cart,
          clearCart,
          inCart: inCart,
          removeProduct,
          agregar,
        }}
      >
        {children}
      </maincontextState.Provider>
    </>
  );
}

export { maincontextState };
