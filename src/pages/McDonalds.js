import React from 'react'
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "../styles/unProducto.module.css";
import ButtonPlus from "@/Components/ButtonPlus";
import { Button } from 'react-bootstrap';
import { useMainContextProvider } from "@/Context/maincontextprovider";

const McDonalds = ({ info }) => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { prodId } = useParams();
  const { agregar } = useMainContextProvider();
  let cantidad;

  const { addProduct } = useMainContextProvider() //
  const [goToCart, setGoToCart] = useState(false)
  const { cart } = useMainContextProvider()
  const { nombre } = useMainContextProvider()//Transmite el valor correctamente
  const { clearCart } = useMainContextProvider()

  //FALTA RESOLVER ERROR DE PASO DE FUNCIONES DESDE EL useMainContextProvider
  // function onAdd(cantidad) {
  //   setGoToCart(true);
  //   addProduct()
  // }  
  
  useEffect(
    () => {
      const queryDb = getFirestore(); //Traer Firestore
      const queryCollection = collection(queryDb, "McDonalds"); //Apuntar a la collection 
      getDocs(queryCollection) //Traer la colección
        .then((res) =>
          setData(
            res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))

          )
        );
    },
    [prodId],
  );

  return data.map((producto, key) => (
    <div key={producto.id} className={styles.products}>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.Title}>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {producto.precio}</strong>
          </Card.Text>
          <ButtonPlus info={cantidad} />
          <Button style={{ marginTop: "10px", marginBottom: "15px" }} onClick={() => agregar(producto)}>Agregar al carrito</Button>
          <Button style={{ marginTop: "10px", marginBottom: "15px" }} onClick={() => clearCart(producto) }>Quitar</Button>
        </Card.Body>
      </Card>
      </div>
  ))
  
}

export default McDonalds