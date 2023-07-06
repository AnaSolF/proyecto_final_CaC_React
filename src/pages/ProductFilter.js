import { useEffect, useState } from "react";
import React from "react";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import UnProducto from "./UnProducto";
import UnProductoView from "./UnProductoView";

const ProductFilter = () => {
  const [data, setData] = useState([]);
  const { productoId } = useParams();

  useEffect(
    () => {
      const queryDb = getFirestore(); //Traer bd Firestore
      const queryCollection = collection(queryDb, "Negocios"); //Apuntar a la collection Negocios
      if (productoId) {
        const queryFilter = query(
          queryCollection,
          where("id"),
          "==",
          productoId
        );
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
    [productoId],

  );
  return (
    <UnProductoView  />

 )
};

export default ProductFilter;
