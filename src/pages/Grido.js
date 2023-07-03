import { useEffect, useState } from "react";
import React from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/unProducto.module.css";

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
    <div key={negocio.id} className={styles.producto}>
      <Card style={{ width: "17rem" }} >
        <Card.Img variant="top" src={negocio.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{negocio.nombre}</Card.Title>
          <Card.Text>{negocio.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {negocio.precio}</strong>
          </Card.Text>
          <Button
            variant="outline"
            style={{ border: "none", float: "right" }}
            href="/UnProducto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="green"
              className="bi bi-plus-circle"
              viewBox="0 0 30 30"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
};

export default Grido;
