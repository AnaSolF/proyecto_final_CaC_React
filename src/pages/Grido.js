import { useEffect, useState } from "react";
import React from "react";
import { getFirestore, getDocs, collection, getData } from "firebase/firestore";
import { BrowserRouter, Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/unProducto.module.css";
import { NavLink } from "react-bootstrap";

const Grido = () => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { productoId } = useParams();
  const [coleccion, setColeccion]= useState()//Cómo hacer variable la colección?
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
    console.log(data)
  );
    return data.map((negocio, key) => (
    <div key={negocio.id} className={styles.products}>
      <Card style={{ width: "17rem" }} >
        <Card.Img variant="top" src={negocio.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{negocio.nombre}</Card.Title>
          <Card.Text>{negocio.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {negocio.precio}</strong>
          </Card.Text>
        <NavLink href="/:productoId">Ver</NavLink>
        </Card.Body>
      </Card>
    </div>
   
    ));
};

export default Grido;
