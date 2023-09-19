import { useEffect, useState } from "react";
import React from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/unProducto.module.css";
import ButtonPlus from "@/Components/ButtonPlus";

const Grido = () => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { productoId } = useParams();
  const [coleccion, setColeccion] = useState()//Cómo hacer variable la colección?
  let [contador, setContador] = useState(0);
  useEffect(
    () => {
      const queryDb = getFirestore(); //Traer Firestore
      const queryCollection = collection(queryDb, "Negocios"); //Apuntar a la collection Negocios
      getDocs(queryCollection) //Traer la colección
        .then((res) =>
          setData(
            res.docs.map((negocio) => ({ id: negocio.id, ...negocio.data() }))
          )
      );
    },
    [productoId],

  )

// Función para calcular el precio total
  const calcularPrecioTotal = (precio, cantidad) => {
    return precio * cantidad;
  };

  // Manejar el clic en el botón "Agregar"
  const handleAgregarClick = (producto, cantidad) => {
    const precioTotal = calcularPrecioTotal(producto.precio, cantidad);
    console.log("Precio total:", precioTotal);
    return precioTotal 
  };
    return data.map((negocio, key) => (
    <div key={negocio.id} className={styles.products}>
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={negocio.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.Title}>{negocio.nombre}</Card.Title>
          <Card.Text className={styles.p}>{negocio.descripcion}</Card.Text>
          <Card.Text>
              <strong>$ { contador*negocio.precio }</strong>
            </Card.Text>
            <ButtonPlus cantidad={contador} setCantidad={setContador} />
            <Button
              href="/Carrito"
              variant="outline"
            ><strong>+ Agregar</strong></Button>
        </Card.Body>
      </Card>
    </div>
    ));
};

export default Grido;
