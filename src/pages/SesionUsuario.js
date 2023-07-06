import CardsComercios from "@/Components/CardsComercios";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";
import MyHeader from "@/Components/myHeader";
import React from "react";
import { Nav } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import data from "../Data/Data.json"

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
        textcart="Mis compras"
        hrefbtn="/"
        iconcart={
          <i
            className="bi bi-cart-plus-fill"
            style={{ marginRight: "15px" }}
          ></i>
        }
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
