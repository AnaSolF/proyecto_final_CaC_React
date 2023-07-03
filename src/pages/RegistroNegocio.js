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

const RegistroNegocio = () => {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  let newcontextState = darkMode;
  return (
    <>
      <section className={darkMode ? styles.dark : styles.light}>
        <MyHeader
          textbtn="Regresar"
          hrefbtn="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textLinkUno="Ayuda en línea"
          textcart="Mis compras"
          iconcart={
            <i
              className="bi bi-cart-plus-fill"
              style={{ marginRight: "15px" }}
            ></i>
          }
          iconhelp={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{ marginRight: "10px" }}
              fill="currentColor"
              className="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
            </svg>
          }
          iconnegocio={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-shop-window"
              viewBox="0 0 16 16"
              style={{ marginRight: "10px" }}
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          }
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
