import React, { useState } from "react";
import styles from "@/styles/Login.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Nav } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useAuthContextProvider } from "../Context/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const NewRegister = (props) => {
  const { user } = useAuthContextProvider();
  let { setUser } = useAuthContextProvider();
  let { signup } = useAuthContextProvider();
  const { auth } = useAuthContextProvider();
  const [error, setError] = useState("");
  const router = useRouter("");

  const handleSubmit = async (e) => {
    await signup(user.email, user.password);
  };
  var [visible, setVisible] = useState("true");
  var [texto, setTexto] = useState("Mostrar");

  const change = () => {
    setVisible(!visible);
    var pass = document.getElementById("password");
    if (visible) {
      pass.type = "text";
      setTexto("Ocultar contraseña");
    } else {
      pass.type = "password";
        setTexto("Mostrar contraseña");
    }
  };

  const login = () => {
    router.push('/CustomLog') 
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
            <h4 style={{ padding: "10px" }}>Registráte con tu Email</h4>
            <p style={{ fontSize: "small" }}>Ingresá tus datos</p>
            {error && <p>{error}</p>}
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
            </Form>
            {/* <p style={{ fontSize: "small", marginTop: "10px" }}>
        Olvidé mi contraseña
      </p> */}
            <p class="d-flex justify-content-end">
              <button
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
              // onClick={(e) => {
              //   handleSubmit(e);
              // }}
              onClick={() => {
                handleSubmit();
              }}
              className={styles.botonContinuar}
            >
              Registrarme
            </button>
            <button onClick={()=>{login()} } className={styles.botonLogin}>
              Ya tengo cuenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRegister;
