import React from "react";
import styles from "../styles/formRegistroLocal.module.css";
import { useContext } from "react";
import { maincontextState } from "@/Context/maincontextprovider";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form } from "react-bootstrap";
import { Nav, Link } from "react-bootstrap";
import {
  getFirestore,
  getDocs,
  doc,
  getDoc,
  collection,
  getData,
  setDoc,
  addDoc,
} from "firebase/firestore"; 
import { useRouter } from "next/router";

const FormRegistroLocal = () => {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  let newcontextState = darkMode;
  const [negocio, setNegocio] = useState({
    nombre: "",
    apellido: "",
    categoria: "",
    telefono: 0,
  });
  const router = useRouter("");

//posteamos datos usuario negocio
  const agregar = async (negocio) => {
    const queryDb = getFirestore();
    var product = await addDoc(collection(queryDb, "Comercios"), negocio)
    router.push("/NewRegister")
    alert("Bienvenido/a: "+ negocio.nombre);
  }

  const [nombre, setNombre] = useState("");
  return (
    <>
      <div className={darkMode ? styles.dark : styles.inputGroup}>
        <h5 style={{ paddingTop: "30px" }}>Registro de tu local</h5>
        
        <Nav.Link className={styles.texto} href="/Local_Login"> Ya tengo cuenta</Nav.Link>
       
        <Form>
          <FloatingLabel label="Nombre del negocio" className={styles.input}>
            <Form.Control
              type="text"
              placeholder="Nombre del negocio"
              id="categoria"
              name="categoria"
              required
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setNegocio({ ...negocio, categoria: value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Nombre" className={styles.input}>
            <Form.Control
              type="text"
              required
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setNegocio({ ...negocio, nombre: value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Apellido" className={styles.input}>
            <Form.Control
              type="text"
              required
              id="apellido"
              name="apellido"
              placeholder="Apellido"
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setNegocio({ ...negocio, apellido: value });
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Teléfono" className={styles.input}>
            <Form.Control
              type="number"
              required
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
              onChange={(e) => {
                const { value } = e.target;
                e.preventDefault;
                setNegocio({ ...negocio, telefono: value });
              }}
            />
          </FloatingLabel>
        </Form>
        <button className={styles.btn}
        onClick={()=>agregar(negocio)}>Comenzar</button>
      </div>
    </>
  );
};

export default FormRegistroLocal;
