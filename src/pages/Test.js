import { Component } from "react";
import Container from "@mui/material/Container";
import { useState } from "react";
// import WatsonChat from "./WatsonChat";

export default function Test() {
  //PRUEBAS/ EJERCICIOS

  // const handleSubmit = (valores) => {
  //   console.log("AppJs: ", valores);
  // };
  //     <Container component="section" maxWidth="sm">
  //   <h2>Formulario de Registro</h2>
  //   <CustomLog handleSubmit={handleSubmit} />
  // </Container>

  //Traer servicio de firestore
//Crear un puntero al dato que queremos traer
//Traer el dato con una promesa


//NOS CONECTAMOS CON UN DOCUMENTO DE UNA COLECCION DE FIREBASE
// import { getFirestore, doc, getDoc } from "firebase/firestore";
  // const [data, setData] = useState({});
  // const { detalleId } = useParams();
  // useEffect(() => {
  //     const queryDb = getFirestore()//Traer Firestore
  //     const queryDoc = doc(queryDb, "Negocios", "Bo0Hg652pgnw1rkHH4Sl")//Apuntar al documento
  //     getDoc(queryDoc)//Traer el doc 
  //         //getDoc(doc(getFirestore(),"Negocios", "hUBvoX3L0I5KFpQ9UjPo"))//Ponemos todo junto y es lo mismo.
  //         .then( res => setData({ id: res.id, ...res.data() }))
  // }, [])
  //MOSTRAMOS DATA 
  {/* <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={data.imagen}  />
            <Card.Body>
            <Card.Title>{data.nombre}</Card.Title>
              <Card.Text>
                {data.descripcion}
            </Card.Text>
            <Card.Text>
                {data.precio}
            </Card.Text>         
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}

  const [nombre, setNombre] = useState("");
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  let cards = ["Uno", "Dos", "Tres", "cuatro"];

  return (
    <>
      <h2>Esquema map para cards</h2>
      <ul>
        {cards.map((card, key) => {
          return <li key={card}>{card}</li>;
        })}
      </ul>
      <h2>Hook useState</h2>
      <h6>
        {" "}
        Capturar nombre mediante input y usar condición para aplicar un estilo
      </h6>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)} //Evento onChange IMPORTANTE
        placeholder="Cambiar nombre"
      />
      <p className={nombre.length >= 4 ? "verde" : "rojo"}>
        Mi nombre es: {nombre}
      </p>
      <button
        onClick={(e) =>
          nombre.length >= 4
            ? alert(
                "Hola " +
                  nombre +
                  "! " +
                  " tu nombre tiene más de cuatro letras."
              )
            : alert(
                "Hola " +
                  nombre +
                  "! " +
                  " tu nombre tiene menos de cuatro letras."
              )
        }
      >
        Saludar
      </button>
      <p>Nuevo nombre: {nombre}</p>
      {/* import {people} from './data.js'; import {getImageUrl} from './utils.js'; */}
      {/* <WatsonChat /> */}
      
    <SesionUsuario />
    </>
  );
}
