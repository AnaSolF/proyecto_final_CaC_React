import React, { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import data from "../Data/Data.json";
import MyFooter from "@/Components/MyFooter";
import MyHeader from "@/Components/myHeader";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";
import MyBanner from "@/Components/MyBanner";

export default (props) => {
  var { cardsImg } = data; 
  cardsImg.category = new Array(1).map((e, i) => ({
    category: i,
  }));
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
        textLink="Salir"
        textLinkDos="Salir"
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
      <div className={styles.catContainer}>
      <div className={styles.categoriasMap}>
      {cardsImg.map((categoria) => (
        <div className={styles.nav}>
          
          <Link
            id="linkCat"
            key={categoria.category}
            href="/Categories/[category]"
            as={`/Categories/${categoria.category}`}
          >
         <img src={categoria.imagen} width={"100px"}></img> 
          </Link>
          
        </div>
    
      ))}
        </div>
        </div>
      <MyFooter />
    </div>

  );
};

