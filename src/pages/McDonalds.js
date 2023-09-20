import React from "react";
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Card from "react-bootstrap/Card";
import styles from "../styles/unProducto.module.css";
import { Button } from "react-bootstrap";
import { useMainContextProvider } from "@/Context/maincontextprovider";
import { useRouter } from 'next/router'
// Importa el componente 'Link' de 'next/link' para navegar entre páginas en una aplicación Next.js
import Link from 'next/link'


const McDonalds = () => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const { agregar } = useMainContextProvider();
  const { comprar } = useMainContextProvider();
  const [goToCart, setGoToCart] = useState(false);
  const { cart } = useMainContextProvider();
  const { setCart } = useMainContextProvider();
  const { clearCart } = useMainContextProvider();
  var { total } = useMainContextProvider();
  let [contador, setContador] = useState(0);

  useEffect(() => {
    const queryDb = getFirestore(); //Traer Firestore
    const queryCollection = collection(queryDb, "McDonalds"); //Apuntar a la collection
    getDocs(queryCollection) //Traer la colección
      .then((res) =>
        setData(
          res.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      );
  }, []);

  //Agregar LINK
  const router = useRouter()

  // Extrae la propiedad 'id' del objeto 'query' del enrutador para acceder al valor de 'id' en la ruta actual
  const { id } = router.query
  return data.map((producto, key) => (
    <div key={producto.id} className={styles.products}>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.Title}>{producto.nombre}</Card.Title>
          <Link key={producto.id} href="/notes/[id]" as={`/notes/${producto.id}`}><strong>+ Detalle</strong></Link>
        </Card.Body>
      </Card>
    </div>
  ));
};

export default McDonalds;
