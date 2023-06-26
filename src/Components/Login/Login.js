import styles from "@/styles/Login.module.css";
import { Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SocialLogin from "@/Components/Login/SocialLogin";
// import Button from "react-bootstrap/Button";


export default function Login() {
  return (
    <>
      <div className={[styles.login]}>
        <div className={styles.loginUno}>
          <Nav.Link href="/" className={styles.No}>
            Ahora no
          </Nav.Link>
          <div className={styles.logos}>
            <Image src="/LogoP.png" width="100px" className={styles.logoP} />

            <div className={styles.logoP1}>
              <Image src="/LogoW.png" width="180px" />
            </div>
          </div>

          <div className={styles.loginBody}>
            <h6 className={styles.titulo}>Elegí cómo querés ingresar</h6>
            <div className={styles.buttons}>
              <SocialLogin />
            </div>

            <p className={styles.parrafo}>
              Al continuar, aceptas nuestros politica de privacidad y términos
              de uso.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
