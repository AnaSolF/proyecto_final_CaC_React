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

  )

    let [contador, setContador] = useState( 0);
    function increment () {
    let cantidad = contador + 1;
    setContador(cantidad)
    localStorage.setItem("Cantidad", cantidad) 
    }

    function decrement() {
        let counter = contador - 1
        if ( counter <= 0 ) {
            counter = 0
        }
        
        setContador(counter);
        // localStorage.setItem("Menos", counter) 
  }
  
    return data.map((negocio, key) => (
    <div key={negocio.id} className={styles.products}>
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={negocio.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.Title}>{negocio.nombre}</Card.Title>
          <Card.Text>{negocio.descripcion}</Card.Text>
          <Card.Text>
              <strong>$ {negocio.precio * contador}</strong>
            </Card.Text>
            <div style={{ marginBottom: "15px", textAlign:"center"}}>
            <div style={{ margin: "0 auto" }}>
                <button style={{margin:"5px", border:"none"}} onClick={ () => decrement() }>
                    -
                </button>
                <button style={{margin:"5px", border:"none"}} onClick={ () => increment() }>
                    +
            </button>
            </div>
                <br></br>
                <span> Cantidad: {contador} </span></div>
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
