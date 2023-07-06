import React from 'react'
import Button from "@mui/material/Button";
import styles from "@/styles/Login.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { app } from "../firebase/InitConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const CustomLogin = () => {

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Autenticacion() {
    signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      const user = credentials.user
      alert("Bienvenido!")
    })

    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
      if (errorCode === 'auth/user-not-found') {
        alert("Usuario no registrado")
      }
      if (errorCode === 'auth/wrong-password') {
       alert("Contraseña incorrecta")
      }
    })
  }
  return (
    <>
    <div className={styles.fondo}>
      <div className={styles.login}>
        <div className={styles.formulario}>
          <Nav.Link href="/LoginBack">
            <ArrowBackIosIcon />
          </Nav.Link>
          <br></br>
          <h4 style={{ padding: "10px" }}>Ingresa con tu Email</h4>
          <p style={{ fontSize: "small" }}>Ingresá tus datos</p>
            <Form>
              <FloatingLabel label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                  required
                
                  onChange={(e) => {
                    const { value } = e.target;
                    e.preventDefault
                    if (value.includes("@") && value.includes(".com") && value!=null) {
                      setEmail(value);
                    } else {
                      setEmail("");
                    }
                  }}
                />
              </FloatingLabel>

              <FloatingLabel label="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  id="password"
                    onChange={(e) => {
                    e.preventDefault
                    const { value } = e.target;
                    if ( value.length > 8 && value!=null) {
                      setPassword(value);
                    } else {
                      setPassword('');
                    }
                  }}
                
                />
              </FloatingLabel>
            </Form>
            <Button type="submit"
              onClick={(e) => {
             Autenticacion()
            }} className={styles.botonContinuar}
            href='#'>
            Iniciar Sesión
            </Button>
            <Button className={styles.botonContinuar}
            href='/CustomRegister'>Registrarme</Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default CustomLogin