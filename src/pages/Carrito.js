import React, { useState, useEffect } from "react";
import styles from "../styles/carrito.module.css";
import MyHeader from "@/Components/myHeader";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";
import { useMainContextProvider } from "@/Context/maincontextprovider";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import {
  getFirestore,
  getDocs,
  collection,
  getData,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";

// const [nombre, setNombre] = useState("");
// const [precio, setPrecio] =useState("")
//Importo el contexto que quiero usar

// const Carrito = (props) => {
//   let [contador, setContador] = useState(0);
//   const { cart } = useMainContextProvider();
//   const { setCart } = useMainContextProvider();
//   const router = useRouter()

//   // Función para calcular el precio total
//   const calcularPrecioTotal = (precio, cantidad) => {
//     return precio * cantidad;
//   };

// Manejar el clic en el botón "Agregar"
// const handleAgregarClick = (producto, cantidad) => {
//   const precioTotal = calcularPrecioTotal(producto.precio, cantidad);
//   let newCArt = cart.push(producto)
//   localStorage.setItem("cart", JSON.stringify(cart));
//   console.log(precioTotal);
//   return precioTotal;
// };

// const sumar = () => {
//   let [total, setTotal] = useState([]);
//   total.push(precioTotal)
// }

// ---------------------------------------------------------
const Carrito = () => {
  const [data, setData] = useState([]);
  let [contador, setContador] = useState(0);
  //Traemos datos de carrito
  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "carrito");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
      )
    );
  }, []);

  return (
    <>
      <div className={styles.carritoContainer}>
        <MyHeader
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn=" Regresar"
          textLinkUno="Ayuda en línea"
          textcart=" Mis compras"
          textLinkDos=" Salir"
          textLink=" Salir"
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          iconlogout={<IconLogout />}
        />
        <div>
          <div className={styles.titles}>
            <h2>Su carrito está vacío</h2>
            <h2>Carrito de compras</h2>
          </div>

          <div className={styles.productos}>
            <Table>
              {" "}
              <thead style={{ textAlign: "center" }}>
                <tr style={{ textAlign: "center" }}>
                  <th>Producto</th>
                  <th>Total</th>
                </tr>
              </thead>
            </Table>
            {data.map((producto, key) => (
              <div key={producto.id} className={styles.products}>
                <Table striped="columns">
                  <tbody style={{ textAlign: "center" }}>
                    <tr style={{ textAlign: "center" }}>
                      <td style={{ width: "33%" }}>
                        <img
                          src={producto.imagen}
                          style={{ width: "50%" }}
                        ></img>
                      </td>
                      <td>{<strong>{producto.precioTotal}</strong>}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ))}
            <div className={styles.comprar}>
              {" "}
              <Button style={{ float: "right", backgroundColor: "pinky" }}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Carrito;
