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

  const setIsLoggedIn = (isLoggedIn) => {
    setContext({ ...context, ["isLoggedIn"]: isLoggedIn });
  };

  //agrego función para setear username

  const setUsername = (username) => {
    setContext({ ...context, ["username"]: username });
  };

  //Carrito LOGICA
  const [cart, setCart] = useState([]);

  //Agregar al carrito
  function addProduct(item, cantidad) {
    const nuevoCarrito = cart.filter((prod) => prod.id !== item.id);
    nuevoCarrito.push({ ...item, cantidad: cantidad });
    setCart(nuevoCarrito);
  };

  //vaciar carrito

  const clearCart = () => setCart([]);

  //Saber si hay un producto en el carrito
  const inCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  //Remover un producto
  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));
  
  //Prueba
  const prueba = () =>{ console.log("Funciona")}

  return (
    <>
      <maincontextState.Provider
        value={{
          darkMode: context.darkMode,
          setDarkmode: setDarkMode,
          isLoggedIn: context.isLoggedIn,
          username: context.username,
          cart: context.cart,
          clearCart: context.clearCart,
          inCart: context.inCart,
          removeProduct: context.removeProduct,
          addProduct: context.addProduct,
          //Pasamos las funciones al provider
          nombre: "Pablo"
        }}
      >
        {children}
      </maincontextState.Provider>
    </>
  );
}

export { maincontextState };
