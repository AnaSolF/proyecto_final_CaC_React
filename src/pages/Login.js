import React from "react";
import styles from "@/styles/Login.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useAuthContextProvider} from "../Context/AuthContext"


const Login = (props) => {
  let { user } = useAuthContextProvider();
  let { setUser }=useAuthContextProvider()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mostrar =()=>{console.log(user)}
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
                    name="email"
                  required
                  value={email}
                  onChange={(e) => {
                    const { value } = e.target;
                    e.preventDefault;
                    setEmail(value);
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
                  value={password}
                  onChange={(e) => {
                    const { value } = e.target;
                    e.preventDefault;
                    setPassword(value);
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
                Autenticacion();
              }}
              className={styles.botonContinuar}
            >
              Iniciar Sesión
            </button>
            <button className={styles.botonLogin} href="/NewRegister">
                Registrarme
                onClick={()=>{mostrar()}}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login