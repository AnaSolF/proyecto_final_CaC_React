import styles from "@/styles/Login.module.css";
import Image from "react-bootstrap/Image";
import { appFirebase } from "@/firebase/InitConfig";
import { getAuth, signInWithPopup, linkWithPopup } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";

export default function SocialLogin() {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  function doLogin(provider) {
    const auth = getAuth(appFirebase);
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
          style={{ marginRight: "5px" }}
        />
           {"Continuar con Google"}
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
