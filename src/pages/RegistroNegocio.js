import React from "react";
import FormRegistroLocal from "./FormRegistroLocal";
import RegistroLocalText from "./RegistroLocalText";
import styles from "../styles/registroNegocio.module.css";
import Vender from "./Vender";
import MyHeader from "@/Components/myHeader";
import Historia from "./Historia";
import Gestion from "./Gestion";
import Funcionamos from "./Funcionamos";
import Flota from "../pages/Flota";
import Marcas from "../pages/Marcas";
import Preguntas from "@/pages/Preguntas";
import MyFooter from "@/Components/MyFooter";
import MainContextProvider from "@/Context/maincontextprovider";
import Darkmode from "@/Components/Darkmode";
import { useContext } from "react";
import { maincontextState } from "@/Context/maincontextprovider";
import IconHelp from "@/Components/Icons/IconHelp";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconCart from "@/Components/Icons/IconCart";

const RegistroNegocio = () => {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  let newcontextState = darkMode;
  return (
    <>
      <section className={darkMode ? styles.dark : styles.light}>
        <MyHeader
          textbtn="Regresar"
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textLinkUno="Ayuda en línea"
          textcart="Carrito"
          textLinkDos="Salir"
          iconcart={<IconCart />}
          iconhelp={<IconHelp />}
          iconnegocio={<IconNegocios />}
        />
        <section className={styles.section}>
          <section className={styles.sectionOne}>
            <RegistroLocalText />
          </section>
          <section className={styles.sectionTwo}>
            <FormRegistroLocal />
          </section>
        </section>
        <section className={styles.sectionThree}>
          <Vender />
        </section>
        <section className={styles.historia}>
          <Historia />
        </section>
        <section className={styles.gestion}>
          <Gestion />
        </section>
        <section className={styles.funcional}>
          <Funcionamos />
        </section>
        <section className={styles.flota}>
          <Flota />
        </section>
        <section className={styles.marcas}>
          <Marcas />
        </section>
        <section className={styles.preguntas}>
          <Preguntas />
        </section>
        <MyFooter />
      </section>
    </>
  );
};

export default RegistroNegocio;
/*Revisar ERROR botón Darkmode*/
