import styles from "@/styles/Login.module.css";
import Image from "react-bootstrap/Image";
import { app } from "@/firebase/InitConfig";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";

// import Button from "react-bootstrap/Button";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";


export default function SocialLogin() {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  function doLogin(provider) {
    const auth = getAuth(app);
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
    <>
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
        />{"Continuar con Google"}
      {/* <Nav.Link href="/SesionUsuario"></Nav.Link>  */}
      </Button>

      <Button
        onClick={() => doLogin(facebookProvider)}
        className={styles.btnNav}
        variant="outline-dark"
        color="light"
      >
        <Image
          src="/icons8-facebook-rodeado-de-círculo-48.png"
          width={"20px"}
          style={{ marginBottom: "5px" }}
        />{"Iniciar sesión con Facebook "}
      </Button>
      
    </>
  );
}
