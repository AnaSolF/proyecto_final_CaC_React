import React from "react";
import MainContextProvider from "@/Context/maincontextprovider";
import Darkmode from "@/Components/Darkmode";
import { useContext } from "react";

import { maincontextState } from "@/Context/maincontextprovider";
import RegistroNegocio from "./RegistroNegocio";
const Negocios = () => {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  let newcontextState = darkMode;
  return (
    <>
      <MainContextProvider>
        <RegistroNegocio />
      </MainContextProvider>
    </>
  );
};

export default Negocios;
