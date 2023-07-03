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
import Darkmode from "./Darkmode";

export default function MyMain({ section }) {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  let newcontextState = darkMode;
  //Guardo valor de newcontextState en local storage
  saveContextState(newcontextState);

  return (
    <>
      {
        <section className={darkMode ? styles.dark : styles.light}>
          <div className="contenedor">
            <MyHeader
              textbtn="Registrá tu negocio" 
              hrefbtn="/Negocios"
              textLinkDos="Ingresar/ Registrarme" 
              textLink="Ingresar/ Registrarme" 
              textLinkUno="Ayuda en línea"
              titleText=" Qué bonito tenerte aquí"
              textcart="Mis compras"
              iconcart={
                <i
                  className="bi bi-cart-plus-fill"
                  style={{ marginRight: "15px" }}
                ></i>
              }
              
              iconlogout={
                <i
                  className="bi bi-box-arrow-right"
                  style={{ marginRight: "5px" }}
                ></i>
              }
              iconnegocio={
                <i
                  className="bi bi-shop-window"
                  style={{ marginRight: "20px" }}
                ></i>
              }
              iconhelp={
                <i
                  className="bi bi-headset"
                  style={{ marginRight: "10px" }}
                ></i>
              }
              iconhome={
                <i className="bi bi-house-fill" style={{ marginRight: "20px" }}></i>
              }
             
            />
            <MyBanner
              className={styles.banner}
              title="¡Pedí lo que quieras!"
              text="Restaurantes, mercados, farmacias, kioscos y mucho más."
              src="/home-background-ar.png"
            ></MyBanner>
            <div className={styles.comerciosAd}>
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

export function saveContextState(newcontextState) {
  if (typeof window !== "undefined") {
    localStorage.setItem("contextState", JSON.stringify(newcontextState));
  }
}
