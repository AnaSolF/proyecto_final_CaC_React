import { maincontextState } from "@/Context/maincontextprovider";
// import Login from "./Login";
// import Logout from "./LogOut";
// import { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import button from "react-bootstrap";
import styles from "@/styles/Login.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ButtonGroup, Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useRouter } from "next/router";

export default function InitialLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  //Entrar a https://www.npmjs.com/package/firebase (biblioteca js)

  const submit = () => {
    console.log(email, password);
  };
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
                    // const { value } = e.target;
                    setEmail(e.target.value);
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
                    onChange={(e) => {
                      // const { value } = e.target;
                      setPassword(e.target.value);
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
                {/* {texto} */}
              </button>
            </p>
            <button
              type="submit"
              onClick={(e) => {
                // Autenticacion();
                submit();
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
}
