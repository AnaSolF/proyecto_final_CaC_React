import MyButton from "@/Components/MyButton";
import styles from "@/styles/Login.module.css";
import { Nav, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginUno}>
          <Nav.Link href="#action1" className={styles.No}>
            Ahora no
          </Nav.Link>
          <div className={styles.logo}>
            <Image src="/LogoP.png" width="100px" className={styles.logoP} />
          </div>
          <div className={styles.logoP1}>
            <Image src="/LogoW.png" width="180px" />
          </div>
          <h6 className={styles.titulo}>Elegí cómo querés ingresar</h6>
          <div className={styles.buttons}>
            <MyButton
              className={styles.btnNav}
              variant="outline-dark"
              color="light"
              text="Iniciar sesión con Facebook"
              icon=<Image
                src="\icons8-facebook-rodeado-de-círculo-48.png"
                width={"20px"}
                style={{ marginRight: "5px" }}
              />
            />
            <MyButton
              className={styles.btnNav}
              variant="outline-dark"
              color="black"
              text="Continuar con Google"
              icon=<Image
                src="/icons8-logo-de-google-94.png"
                width={"20px"}
                style={{ marginBottom: "5px" }}
              />
            />
            <MyButton
              className={styles.btnNav}
              variant="outline-dark"
              color="black"
              text="Otro método"
            />
                  </div>
                  
                  <p className={styles.parrafo}>Al continuar, aceptas nuestros politica de privacidad y términos de uso.</p>
        </div>
      </div>
    </>
  );
}
