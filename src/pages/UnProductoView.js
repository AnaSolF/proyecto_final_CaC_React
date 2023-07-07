import React from "react";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import styles from "../styles/unProducto.module.css";
import UnProducto from "./UnProducto";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";

const UnProductoView = ({ data }) => {
  return (
    <div>
      <MyHeader
        href="/"
        className="btnNav"
        variant="outline-dark"
        color="black"
        style={{ fontSize: "12px", fontWeight: "700" }}
        textbtn="Salir"
        textLinkUno="Ayuda en línea"
        textcart="Mis compras"
        hrefbtn="/"
        iconcart={
          <i
            className="bi bi-cart-plus-fill"
            style={{ marginRight: "15px" }}
          ></i>
        }
        iconnegocio={<IconNegocios />}
        iconhelp={<IconHelp />}
      />
      <MyBanner src="BannerGrido.png"></MyBanner>
      <h2 style={{ margin: "50px", textAlign: "center" }}>
        Nuestros productos
      </h2>
      <div className={styles.productos}>
        <UnProducto />
      </div>
      <MyFooter />
    </div>
  );
};

export default UnProductoView;
