import React from 'react'
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "../styles/unProducto.module.css";
import { Button } from 'react-bootstrap';
import { useMainContextProvider } from "@/Context/maincontextprovider";

const McDonalds = ({ info }) => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { prodId } = useParams();
  const { agregar } = useMainContextProvider();
  const { comprar } = useMainContextProvider();
  // var { cantidadT }= useMainContextProvider()
  // var { setCantidadT } = useMainContextProvider();

  // const { addProduct } = useMainContextProvider() //
  const [goToCart, setGoToCart] = useState(false)
  const { cart } = useMainContextProvider()
  const { nombre } = useMainContextProvider()//Transmite el valor correctamente
  const { clearCart } = useMainContextProvider();
  var { total } = useMainContextProvider();
  let [contador, setContador] = useState(0);
  var productoId = "manteca"
  const Compra = () => {
     console.log("Hola")
   }

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
  
  const agregarProd = (producto) => {
    agregar()
  }
  const compra = () => {
    comprar()
  }

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


  return data.map((producto, key) => (
    <div key={producto.id} className={styles.products}>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.Title}>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>
            <strong >$ {producto.precio * contador}
            </strong>
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
          <Button style={{ marginTop: "10px", marginBottom: "15px" }} onClick={() => agregarProd()}>Agregar al carrito</Button>
          <Button style={{ marginTop: "10px", marginBottom: "15px" }} onClick={() => Compra() }>Quitar</Button>
        </Card.Body>
      </Card>
      </div>
  ))
  
}

export default McDonalds