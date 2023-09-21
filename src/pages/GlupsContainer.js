import React from 'react';
import styles from "../styles/sesionUsuario.module.css";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";
import Glups from './Glups';


const GlupsContainer = () => {
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
    <MyBanner src="/AbriTuFranquicia_Interior.png"></MyBanner>
    <h2 style={{ margin: "50px", textAlign: "center" }}>
      Nuestros productos
    </h2>
    <div className={styles.productos}>
      <Glups />
    </div>
    <MyFooter />
  </div>
</>
  )
}

export default GlupsContainer