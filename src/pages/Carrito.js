import React, { useState, useEffect } from "react";
import styles from "../styles/carrito.module.css";
import MyHeader from "@/Components/myHeader";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";

const Carrito = () => {
  let [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (carrito.length === 0) {
      alert("Agregue productos al carrito");
    } else {
      alert("Compra exitosa!");
    }
  });

  return (
    <>
      <div className={styles.carritoContainer}>
        <MyHeader
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn="Salir"
          textLinkUno="Ayuda en línea"
          textcart="Mis compras"
          textLinkDos="Salir"
          textLink="Salir"
          hrefbtn="/"
          iconcart={<IconCart />}
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          iconlogout={<IconLogout />}
        />

        <div className={styles.carrito}>
          <h2>Su carrito está vacío</h2>
        </div>
        <MyFooter />
      </div>
    </>
  );
};

export default Carrito;
