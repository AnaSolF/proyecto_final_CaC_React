import React from 'react';
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection, query, where  } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles/unProducto.module.css";
import ButtonPlus from "@/Components/ButtonPlus";
// Importa el componente 'Link' de 'next/link' para navegar entre páginas en una aplicación Next.js
import Link from 'next/link'
import { useRouter } from 'next/router'

const BurgerKing = () => {
    const [data, setData] = useState([]);
    const [coleccion, setColeccion] = useState()//Cómo hacer variable la colección?
    let [contador, setContador] = useState(0);
    var categoria = "hamburguesas"; // Establece la categoría aquí
    useEffect(
      () => {
        const queryDb = getFirestore(); //Traer bd Firestore
        const queryCollection = collection(queryDb, "McDonalds"); //Apuntar a la collection
        if (categoria) {
          const queryFilter = query(queryCollection, where("categoria", "==", categoria)); // Usa "where" correctamente
          getDocs(queryFilter)
            .then((res) =>
              setData(
                res.docs.map((negocio) => ({ id: negocio.id, ...negocio.data() }))
              )
            );
        } else {
          getDocs(queryCollection).then((res) =>
            setData(
              res.docs.map((negocio) => ({ id: negocio.id, ...negocio.data() }))
            )
          );
        }
      },
      [],
  
    );
  
     //Agregar LINK
     const router = useRouter()
  
     // Extrae la propiedad 'id' del objeto 'query' del enrutador para acceder al valor de 'id' en la ruta actual
     const { id } = router.query
   
  
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
          <Card.Img variant="top" src={negocio.imagen}/>
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.Title}>{negocio.nombre}</Card.Title>
            <Link key={negocio.id} href="/notes/[id]" as={`/notes/${negocio.id}`} className={styles.link}><strong>+ Detalle</strong></Link> 
          </Card.Body>
        </Card>
      </div>
      ));
}

export default BurgerKing