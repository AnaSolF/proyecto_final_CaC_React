import CardsComercios from "@/Components/CardsComercios";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import MyHeader from "@/Components/myHeader";
import React from "react";
import { Nav } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import data from "../Data/Data.json";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";

const SesionUsuario = (props) => {
  const { cardsImg } = data;
  return (
    <>
      <MyHeader
        href="/"
        className="btnNav"
        variant="outline-dark"
        color="black"
        style={{ fontSize: "12px", fontWeight: "700" }}
        textbtn="Salir"
        textLinkUno="Ayuda en línea"
        textLink="Salir"
        textcart="  Mis compras"
        textLinkDos="Salir"
        hrefbtn="/"
        iconcart={<IconCart />}
        iconnegocio={<IconNegocios />}
        iconhelp={<IconHelp />}
        iconlogout={<IconLogout />}
      />
      <MyBanner
        title="¡Pedí lo que quieras!"
        text="Restaurantes, mercados, farmacias, kioscos y mucho más."
        src="/home-background-ar.png"
      />
      <h2 className={styles.titulo}>Explorar</h2>
      <div className={styles.sesion}>
        {cardsImg.map((cardImg, key) => {
          return (
            <div className={styles.tarjeta} key={cardImg.id}>
              <CardsComercios src={cardImg.imagen} href={cardImg.href} />
            </div>
          );
        })}
      </div>
      <MyFooter />
    </>
  );
};

export default SesionUsuario;
