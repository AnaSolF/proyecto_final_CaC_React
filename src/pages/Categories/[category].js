// Importa la biblioteca 'React' para utilizar sus funcionalidades en este componente
import React from "react";
// Importa el hook 'useRouter' de la biblioteca 'next/router' para acceder al objeto del enrutador
import { useRouter } from "next/router";
// Importa el componente 'Link' de 'next/link' para navegar entre páginas en una aplicación Next.js
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import styles from "./categorias.module.css";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconCart from "@/Components/Icons/IconCart";
import IconLogout from "@/Components/Icons/IconLogout";
import Card from "react-bootstrap/Card";
import MyFooter from "@/Components/MyFooter";

export default () => {
  const router = useRouter();
  const { category } = router.query;
  const [data, setData] = useState([]);
  const [coleccion, setColeccion] = useState();
  let [contador, setContador] = useState(0);
  var categoria = category;
  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "McDonalds");
    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoria)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((negocio) => ({ id: negocio.id, ...negocio.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
            res.docs.map((negocio) => ({ id: negocio.id, ...negocio.data() })),
        )
      );
    }
  }, [categoria]);
  return (
    <>
      <div className={styles.negocios}>
        <MyHeader
          href="/Sesion"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn="Regresar"
          textLink="Inicio"
          textLinkDos="Salir"
          iconcart={<IconCart />}
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          textLinkUno="Ayuda en línea"
          iconlogout={<IconLogout />}
              />
        {data.map((negocio, key)=>{ if(negocio.banner)return<div key={negocio.categoria} ><MyBanner src={negocio.banner}></MyBanner></div> })}
       
        <h2 style={{ margin: "50px", textAlign: "center" }}>
          Nuestros productos
        </h2>
        <div className={styles.productos}>
          {data.map((negocio, key) => (
            <div key={negocio.id} className={styles.products}>
                  <Card style={{
                      width: "18rem", margin: "10px"}}>
                <Card.Img variant="top" src={negocio.imagen} />
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.Title}>
                    {negocio.nombre}
                  </Card.Title>
                  <Link
                    key={negocio.id}
                    href="/notes/[id]"
                    as={`/notes/${negocio.id}`}
                    className={styles.link}
                  >
                    <strong>+ Detalle</strong>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <MyFooter />
      </div>
    </>
  );
};
