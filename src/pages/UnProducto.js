import React from "react";
import styles from "../styles/unProducto.module.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//Traer servicio de firestore
//Crear un puntero al dato que queremos traer
//Traer el dato con una promesa

const UnProducto = () => {
  // const [data, setData] = useState();
  // const { detalleId } = useParams();
  // useEffect(() => {
  //   const queryDb = getFirestore(); //Traer Firestore
  //   const queryDoc = doc(queryDb, "Negocios", "Bo0Hg652pgnw1rkHH4Sl"); //Apuntar al documento
  //   getDoc(queryDoc) //Traer el doc
  //     //getDoc(doc(getFirestore(),"Negocios", "hUBvoX3L0I5KFpQ9UjPo"))//Ponemos todo junto y es lo mismo.
  //     .then((res) => setData({ id: res.id, ...res.data() }));
  // }, [detalleId]);
  return (
    // <div className={styles.producto}>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src={data.imagen} style={{height:"300px"}}/>
    //     <Card.Body>
    //       <Card.Title>{data.nombre}</Card.Title>
    //       <Card.Text>{data.descripcion}</Card.Text>
    //       <Card.Text>{data.precio}</Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    //   <div> <Card.Img variant="top" src={data.infoNutricional} className={styles.info} />
    //   </div>
    // </div>
    <> <h1>Un producto</h1></>
  );
};

export default UnProducto;
