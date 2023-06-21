import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import styles from "@/styles/Login.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Nav } from "react-bootstrap";
import FormLogin from "@/pages/FormLogin";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CustomLog({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  return (
    <>
      <div className={styles.fondo}>
        <div className={styles.login}>
          <div className={styles.formulario}>
            <Nav.Link href="/LoginBack">
              <ArrowBackIosIcon />
            </Nav.Link>
            <br></br>
            <h4 style={{ padding: "10px" }}>Inicia sesión con tu e-mail</h4>
            <p style={{ fontSize: "small" }}>Ingresá tus datos</p>
            <>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit({ email, password });
                }}
              >
                <FloatingLabel label="Email address" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  
                  />
                </FloatingLabel>

                <FloatingLabel label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                  
                  />
                </FloatingLabel>
              </Form>
            </>
            <p style={{ fontSize: "small", marginTop: "10px" }}>
              Olvidé mi contraseña
            </p>
            <Button type="submit" onClick={(e) => {
                    console.log({email, password});
                    }} className={styles.botonContinuar}>
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
