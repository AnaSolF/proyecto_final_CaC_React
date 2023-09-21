import React from 'react';
import styles from "../styles/sesionUsuario.module.css";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";
import BurgerKing from './BurgerKing';


const BurguerContainer = () => {
  return (
    <>
    <div className={styles.grido}>
    <MyHeader
      href="/SesionUsuario"
      className="btnNav"
      variant="outline-dark"
      color="black"
      style={{ fontSize: "12px", fontWeight: "700" }}
      textbtn="Regresar"
      textLink="Inicio"
      textLinkDos="Salir"
      iconcart={ <IconCart />}
      iconnegocio={<IconNegocios />}
      iconhelp={<IconHelp />}
      textLinkUno="Ayuda en línea"
      iconlogout={<IconLogout />}
    />
    <MyBanner src="/home_background.png"></MyBanner>
    <h2 style={{ margin: "50px", textAlign: "center" }}>
      Nuestros productos
    </h2>
    <div className={styles.productos}>
      <BurgerKing />
    </div>
    <MyFooter />
  </div>
</>
  )
}

export default BurguerContainer