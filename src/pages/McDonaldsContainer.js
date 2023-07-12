import styles from "../styles/sesionUsuario.module.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import McDonalds from "./McDonalds";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconCart from "@/Components/Icons/IconCart";
import IconLogout from "@/Components/Icons/IconLogout";


export default function McDonaldsContainer({info}) {
  const [data, setData] = useState([]);
  const { productoId } = useParams();
 

  return (
    <>
      <div className={styles.grido}>
        <MyHeader
         hrefbtn="/"
         className="btnNav"
         variant="outline-dark"
         color="black"
         style={{ fontSize: "12px", fontWeight: "700" }}
         textbtn=" Salir"
         textLink=" Inicio"
         textLinkDos=" Salir"
         iconcart={ <IconCart />}
         iconnegocio={<IconNegocios />}
         iconhelp={<IconHelp />}
         textLinkUno="Ayuda en línea"
         iconlogout={<IconLogout />}
        />
        <MyBanner
          src="Banner_APP_WEB_Mc_Melt_1440_X650_WEB_DESKTOP_89958df220.jpg"
          height=" 120vh"
        ></MyBanner>
        <h2 style={{ margin: "50px", textAlign: "center" }}>
          Nuestros productos
        </h2>
        <div className={styles.productos}>
          <McDonalds />
        </div>

        <MyFooter />
      </div>
    </>
  );
}
