import { Component } from "react";
import Container from "@mui/material/Container";
import { useState } from "react";

export default function Test() {
  //PRUEBAS/ EJERCICIOS

  // const handleSubmit = (valores) => {
  //   console.log("AppJs: ", valores);
  // };
  //     <Container component="section" maxWidth="sm">
  //   <h2>Formulario de Registro</h2>
  //   <CustomLog handleSubmit={handleSubmit} />
  // </Container>

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

    </>
  );
}
