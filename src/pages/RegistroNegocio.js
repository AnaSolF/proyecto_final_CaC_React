import React from "react";
import FormRegistroLocal from "./FormRegistroLocal";
import RegistroLocalText from "./RegistroLocalText";
import styles from "../styles/registroNegocio.module.css";
import Vender from "./Vender";
import MyHeader from "@/Components/myHeader";
import Preguntas from "@/pages/Preguntas";
import MyFooter from "@/Components/MyFooter";
import { useContext } from "react";
import { maincontextState } from "@/Context/maincontextprovider";
import IconHelp from "@/Components/Icons/IconHelp";

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
          textLinkDos="Salir"
          iconhelp={<IconHelp />}
        />
        <section className={styles.section}>
          <section className={styles.sectionOne}>
            <RegistroLocalText />
          </section>
          <section className={styles.sectionTwo}>
            <FormRegistroLocal />
          </section>
        </section>
          <Vender />
          <Preguntas />
        <MyFooter />
        </section>

    </>
  );
};

export default RegistroNegocio;
/*Revisar ERROR botón Darkmode*/
