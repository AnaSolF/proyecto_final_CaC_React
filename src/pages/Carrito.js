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
import { Router, useRouter } from "next/router";
import { Button, NavLink } from "react-bootstrap";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import {
  getFirestore,
  getDocs,
  collection,
  getData,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";

const Carrito = () => {
  const [data, setData] = useState([]);
  let [contador, setContador] = useState(0);
  const router = useRouter("");
  var [visible, setVisible] = useState("true");
  var { isLoading } = useMainContextProvider();
  var { setIsLoading } = useMainContextProvider();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
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

  const deleteProduct = async (producto) => {
    let productId = producto.id;
    const queryDb = getFirestore();
    await deleteDoc(doc(queryDb, "carrito", productId));
    router.reload();
  };

  const toggleButton = () => {
    setIsButtonDisabled(!isButtonDisabled);
  };


  return (
    <>
      <div className={styles.carritoContainer}>
        <MyHeader
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn=" Salir"
          textLinkUno="Ayuda en línea"
          textLinkDos=" Salir"
          textLink=" Salir"
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          iconlogout={<IconLogout />}
        />
        <div className={styles.prodContent}>
          <div className={styles.titles}>
          <h2>Carrito de compras</h2>
          </div>

          <div className={styles.productos}>
            <div>
              <Table style={{ maxWidth: "600px" }}>
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th>Producto</th>
                    <th>Total</th>
                    <th>Quitar</th>
                  </tr>
                </thead>
              </Table>
              {data.map((producto, key) => (
                <div key={producto.id} className={styles.products}>
                  <Table style={{
                    maxWidth: "600px", marginBottom: "30px" }}>
                    <tbody>
                      <tr style={{ textAlign: "center" }}>
                        <td style={{ width: "33%" }}>
                          <img
                            src={producto.imagen}
                            style={{ width: "30%", height: "30%" }}
                          ></img>
                        </td>
                        <td style={{ paddingTop: "5%" }}>
                          {<strong>$ {producto.precioTotal}</strong>}
                        </td>
                        <td style={{ width: "20%", paddingTop: "5%" }}>
                          <Button
                            style={{
                              backgroundColor: "rgb(225, 14, 84)",
                              border: "none",
                            }}
                            onClick={() => {
                              deleteProduct(producto);
                            }}
                          >
                            X
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              ))}
              <div className={styles.comprar}>
              <Button
                  style={{
                    marginLeft:"70px",
                    backgroundColor: "rgb(225, 14, 84)",
                    border: "none",
                    width:"30%"
                    }}
                  disabled={isButtonDisabled}
                  onClick={() => {
                  toggleButton()
                  }}
                >
                  Comprar
                </Button>
                <NavLink
                  href="/Sesion"
                  style={{
                    paddingTop: "30px",
                    fontSize: "1rem",
              
                  }}
                >
                  Seguir comprando
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Carrito;
