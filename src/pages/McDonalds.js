import React from 'react'
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "../styles/unProducto.module.css";


const McDonalds = () => {
    //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { prodId } = useParams();
    
  useEffect(
    () => {
      const queryDb = getFirestore(); //Traer Firestore
      const queryCollection = collection(queryDb, "McDonalds"); //Apuntar a la collection Negocios
      getDocs(queryCollection) //Traer la colección
        .then((res) =>
          setData(
            res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
          )
        );
    },
    [prodId],
    console.log(data)
  );
  return data.map((producto, key) => (
    <div key={producto.id} className={styles.producto}>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {producto.precio}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  ))
  
}

export default McDonalds