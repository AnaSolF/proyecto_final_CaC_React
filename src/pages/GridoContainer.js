import React from "react";
import styles from "../styles/sesionUsuario.module.css";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import Grido from "./Grido";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";

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
          iconcart={ <IconCart />}
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          textLinkUno="Ayuda en línea"
          iconlogout={<IconLogout />}
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
