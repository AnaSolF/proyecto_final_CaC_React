import { useEffect, useState } from "react";
import React from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemsDetail from "./ItemsDetail";

const ItemsDetailContainer = () => {
  //Traer servicio de firestore
  //Crear un puntero al dato que queremos traer
  //Traer el dato con una promesa
  const [data, setData] = useState([]);
  const {ProductoId} = useParams();
  const [coleccion, setColeccion] = useState(); //Cómo hacer variable la colección?
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
    [ProductoId],
    console.log(data)
  );

  return <ItemsDetail data={data} />;
};

export default ItemsDetailContainer;
