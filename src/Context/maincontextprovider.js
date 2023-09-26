import { createContext, useContext } from "react";
import { useState } from "react";
import getInitialState from "./maincontext";
import React from "react";

const maincontextState = React.createContext([{}, () => {}]);
export const useMainContextProvider = () => useContext(maincontextState);
export default function MainContextProvider({ children }) {
  const [context, setContext] = useState(getInitialState());

  const setDarkMode = (darkMode) => {
    setContext({ ...context, ["darkMode"]: darkMode });
  };

  const [isLoading, setIsLoading] = useState(false)

  const waitFor= (time)=> {
    return new Promise((resolve) =>setTimeout(resolve, time))
}
  return (
    <>
      <maincontextState.Provider
        value={{
          darkMode: context.darkMode,
          setDarkmode: setDarkMode,
          isLoading,
          setIsLoading,
          waitFor
        }}
      >
        {children}
      </maincontextState.Provider>
    </>
  );
}

export { maincontextState };
