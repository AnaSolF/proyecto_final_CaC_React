import React from "react";
import button from "react-bootstrap";
import styles from "@/styles/Login.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ButtonGroup, Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from "next/router";
import { app } from "../firebase/InitConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SesionUsuario from "./SesionUsuario";
import { useAuthContextProvider } from "@/Context/AuthContext";

const CustomLog = (props) => {
  const { user } = useAuthContextProvider();
  let { setUser } = useAuthContextProvider();
  const { signIn } = useAuthContextProvider();
  const router = useRouter("");
  const { auth } = useAuthContextProvider();

  const Authentication = async (e) => {
    await signIn(user.email, user.password);
  };

  var [visible, setVisible] = useState("true");
  var [texto, setTexto] = useState("Mostrar");

  const change = () => {
    setVisible(!visible);
    var pass = document.getElementById("password");
    if (visible) {
      pass.type = "text";
      setTexto("Ocultar");
    } else {
      pass.type = "password";
        setTexto("Mostrar");
        console.log(user)
    }
  };

  return (
    <>
      {" "}
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
                  name="email"
                  required
                  onChange={(e) => {
                    const { value } = e.target;
                    e.preventDefault;
                    setUser({ ...user, email: value });
                  }}
                />
              </FloatingLabel>
              <span>
                <FloatingLabel label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    name="password"
                    onChange={(e) => {
                      const { value } = e.target;
                      e.preventDefault;
                      setUser({ ...user, password: value });
                    }}
                  />
                </FloatingLabel>
              </span>
            </Form>
            <p class="d-flex justify-content-end">
              <button
                text={props.text}
                className={styles.cs}
                id="btnPass"
                onClick={() => {
                  change();
                }}
              >
                {texto}
              </button>
            </p>
            <button
              type="submit"
              onClick={(e) => {
                Authentication();
              }}
              className={styles.botonContinuar}
            >
              Iniciar Sesión
            </button>
            <button className={styles.botonLogin} href="/NewRegister">
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomLog;
