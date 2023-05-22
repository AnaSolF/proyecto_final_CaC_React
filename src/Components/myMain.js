import styles from "@/styles/Home.module.css";
import MyHeader from "@/Components/myHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComerciosAdheridos from "@/Components/ComerciosAdheridos";
import MyBanner from "@/Components/MyBanner";
import Tops from "@/Components/Tops";
import MyFooter from "@/Components/MyFooter";
import { maincontextState } from "@/Context/maincontextprovider";
import { useContext } from "react";

export default function MyMain({ section }) {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;

  return (
    <>
      {
        <section className={darkMode ? styles.dark : styles.light}>
          <div className="contenedor">
            <MyHeader />
            <MyBanner
              className={styles.banner}
              title="¡Pedí lo que quieras!"
              text="Restaurantes, mercados, farmacias, kioscos y mucho más."
            ></MyBanner>
            <div className="comerciosAd">
              <ComerciosAdheridos style={{ marginTop: "10%" }} />
            </div>
            <Tops style={{ margin: "0 auto" }} />
            <div>
              <MyFooter />
            </div>
          </div>
        </section>
      }
    </>
  );
}
