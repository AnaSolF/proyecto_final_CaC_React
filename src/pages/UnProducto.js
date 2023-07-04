import React from "react";
import styles from "../styles/unProducto.module.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UnProducto = () => {
  const [data, setData] = useState();
  const { detalleId } = useParams();
  useEffect(() => {
    const queryDb = getFirestore(); //Traer Firestore
    const queryDoc = doc(queryDb, "Negocios", "LEKNypbdxUj2f8MkHxEa"); //Apuntar al documento
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detalleId]);

  return (
    <div className={styles.producto}>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={data.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title>{data.nombre}</Card.Title>
          <Card.Text>{data.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {data.precio}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
      <div> <Card.Img variant="top" src={data.infoNutricional} className={styles.info} />
      </div>
    </div>
  );
};

export default UnProducto;
