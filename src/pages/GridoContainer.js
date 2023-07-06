import React from "react";
import styles from "../styles/sesionUsuario.module.css";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import Grido from "./Grido";

const GridoContainer = () => {
  return (
    <>
      <div className={styles.grido}>
        <MyHeader
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn="Salir"
          textLink="Inicio"
          textLinkDos="Salir"
          text
          iconnegocio={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{ marginRight: "10px" }}
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
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
          textLinkUno="Ayuda en línea"
          iconlogout={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              style={{ marginRight: "10px" }}
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          }
        />
        <MyBanner src="BannerGrido.png"></MyBanner>
        <h2 style={{ margin: "50px", textAlign: "center" }}>
          Nuestros productos
        </h2>
        <div className={styles.productos}>
          <Grido />
        </div>
        <MyFooter />
      </div>
    </>
  );
};
export default GridoContainer;
