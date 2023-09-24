import styles from "../notes/id.module.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useMainContextProvider } from "@/Context/maincontextprovider";
// Importa la biblioteca 'React' para utilizar sus funcionalidades en este componente
import React from "react";
// Importa el hook 'useRouter' de la biblioteca 'next/router' para acceder al objeto del enrutador
import { useRouter } from "next/router";
// Importa el componente 'Link' de 'next/link' para navegar entre páginas en una aplicación Next.js
import MyHeader from "@/Components/myHeader";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconCart from "@/Components/Icons/IconCart";
import IconLogout from "@/Components/Icons/IconLogout";
import {
  getFirestore,
  getDocs,
  doc,
  getDoc,
  collection,
  getData,
  setDoc,
  addDoc,
} from "firebase/firestore";
import ButtonPlus from "@/Components/ButtonPlus";
// Exporta una función anónima como componente predeterminado
export default () => {
  // Utiliza el hook 'useRouter' para obtener una instancia del enrutador de Next.js
  const router = useRouter();

  // Extrae la propiedad 'id' del objeto 'query' del enrutador para acceder al valor de 'id' en la ruta actual
  const { id } = router.query;
  const prodId = id;
  const [data, setData] = useState({});
  let [contador, setContador] = useState(0);
  const { cart } = useMainContextProvider();
  const { setCart } = useMainContextProvider();

  // Función para calcular el precio total
  const calcularPrecioTotal = (precio, cantidad) => {
    return precio * cantidad;
  };

  // const sumar = () => {
  //   let [total, setTotal] = useState([]);
  //   total.push(precioTotal)
  // }
  useEffect(() => {
    const queryDb = getFirestore(); //Traer Firestore
    const queryDoc = doc(queryDb, "McDonalds", prodId); //Apuntar al documento
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [prodId]);

  const docRef = async (producto, cantidad) => {
    const queryDb = getFirestore();
    let precio= data.precio
    data.precioTotal = calcularPrecioTotal(precio, cantidad)
    var product = await addDoc(collection(queryDb, "carrito"), producto);
    alert("Producto agregado");
    router.push("/Carrito");
  };

  return (
    <>
      <MyHeader
        href="/Sesion"
        className="btnNav"
        variant="outline-dark"
        color="black"
        style={{ fontSize: "12px", fontWeight: "700" }}
        textbtn=" Regresar"
        textLink=" Inicio"
        textLinkDos=" Salir"
        iconcart={<IconCart />}
        iconnegocio={<IconNegocios />}
        iconhelp={<IconHelp />}
        textLinkUno="Ayuda en línea"
        iconlogout={<IconLogout />}
      />
      <div className={styles.producto}>
        <div className={styles.img}>
          <img src={data.imagen}></img>
        </div>

        <h2 className={styles.title}>{data.nombre}</h2>
        <p className={styles.p}>{data.descripcion}</p>
        <p style={{ marginTop: "10px", fontSize: "20px", textAlign: "center" }}>
          <strong>$ {data.precio}</strong>
        </p>
        <p style={{ marginTop: "10px", fontSize: "20px", textAlign: "center" }}>
          <strong>$ {data.precioTotal*contador}</strong>
        </p>
        <p style={{ textAlign: "center" }}>
          <img src={data.infoNutricional}></img>
        </p>

        <div style={{ textAlign: "center" }}>
          <ButtonPlus cantidad={contador} setCantidad={setContador} />
          <Button
            style={{ backgroundColor: "rgb(225, 14, 84)", border: "none" }}
            onClick={() => {
              docRef(data, contador);
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
      <MyFooter />
    </>
  );
};
