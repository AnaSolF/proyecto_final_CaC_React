import React from "react";
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "../styles/unProducto.module.css";
import { Button } from "react-bootstrap";
import { useMainContextProvider } from "@/Context/maincontextprovider";
import ButtonPlus from "@/Components/ButtonPlus";


const McDonalds = () => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { prodId } = useParams();
  const { agregar } = useMainContextProvider();
  const { comprar } = useMainContextProvider();
  const [goToCart, setGoToCart] = useState(false);
  const { cart } = useMainContextProvider();
  const { nombre } = useMainContextProvider(); //Transmite el valor correctamente
  const { clearCart } = useMainContextProvider();
  var { total } = useMainContextProvider();
  let [contador, setContador] = useState(0);
  var productoId = "manteca";

  useEffect(() => {
    const queryDb = getFirestore(); //Traer Firestore
    const queryCollection = collection(queryDb, "McDonalds"); //Apuntar a la collection
    getDocs(queryCollection) //Traer la colección
      .then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
  }, [prodId]);

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

  return data.map((producto, key) => (
    <div key={producto.id} className={styles.products}>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.Title}>{producto.nombre}</Card.Title>
          <Card.Text className={styles.p}>{producto.descripcion}</Card.Text>
          <Card.Text>
            <strong>$ {contador*producto.precio}</strong>
          </Card.Text>
          <ButtonPlus cantidad={contador} setCantidad={setContador} />
          <Button
            //href="/Carrito"
            variant="outline"
            onClick={() => {
              handleAgregarClick(producto, contador);
            }}
          >
            <strong>+ Agregar</strong>
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
};

export default McDonalds;
