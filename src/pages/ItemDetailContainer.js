import React from 'react'
import UnProducto from './UnProducto'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, getDocs, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [data, setData] = useState([]);
  const { productoId } = useParams();
  useEffect(() => {    

    const queryDb = getFirestore(); //Traer Firestore
    const queryCollection = collection(queryDb, "Negocios"); //Apuntar a la collection Negocios
    getDocs(queryCollection) //Traer la colección
      .then((res) =>
        setData(
          res.docs.map((negocio) => ({ id: negocio.id, ...negocio.data() }))
        ),
    )
  
  },
  [],
  console.log(data)
  )

  return (
    <ItemDetail data={ data } />
  )
}

export default ItemDetailContainer