import React from 'react'
import styles from "../styles/carrito.module.css"
import MyHeader from '@/Components/myHeader'
import MyFooter from '@/Components/MyFooter'

const Carrito = () => {
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
        iconlogout={
          <i
            className="bi bi-box-arrow-right"
            style={{ marginRight: "5px" }}
          ></i>
        } />

        <div className={styles.carrito}>

        <h2>Su carrito está vacío</h2>
        </div>
    <MyFooter />
      </div>
    
    </>
  )
}

export default Carrito