import styles from "@/styles/Login.module.css";
import Image from "react-bootstrap/Image";
import { appFireConfig } from "@/firebase/InitConfig";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";
import { Nav, Link } from "react-bootstrap";

export default function SocialLogin() {
  const googleProvider = new GoogleAuthProvider();

  function doLogin(provider) {
    const auth = getAuth(appFireConfig);
    signInWithPopup(auth, provider)
      .then((credentials) => {
        const user = credentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  
  return (
    <><Nav.Link href="/SesionUsuario" className={styles.nav}>
      <Button
        onClick={() => doLogin(googleProvider)}
        className={styles.btnNav}
        variant="outline-dark"
        color="black"
      >
        <Image
          src="/icons8-logo-de-google-94.png"
          width={"20px"}
          style={{ marginRight: "15px" }}
        />
        {"Continuar con Google"}
        {/* <Nav.Link href="/SesionUsuario"></Nav.Link>  */}
      </Button>
      </Nav.Link>
      <Nav.Link href="/CustomLogin" className={styles.nav}>
        <Button className={styles.btnNav} variant="outline-dark" color="white">
          <Image
            src="icons8-usuario-48.png"
            width={"20px"}
            style={{ marginBottom: "5px", marginRight: "12px" }}
          />
      {"Ingresar con Email"}
        </Button>
      </Nav.Link>
    </>
  );
}
