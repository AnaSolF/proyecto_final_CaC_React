import React from "react";
import styles from "../styles/flota.module.css";
import data from "../Data/Data.json";
import { Key } from "@mui/icons-material";

const Flota = () => {
  const { imgFlota } = data; //Agrego constante para solucionar un error
  return (
    <>
      <div className={styles.flota}>
        <div>
          <div className={styles.titulo}>
            <h2>{"La flota más grande"}</h2>
          </div>
          <div className={styles.titulo}>
            <h6>de Latinoamérica</h6>
          </div>
          <p className={styles.parrafo}>
            Sólo tendrás que ocuparte de preparar el mejor pedido. ¡De
            entregarlo nos encargamos nosotros!
          </p>
          <div className={styles.imagenes}>
            {imgFlota.map((imgFlota, Key) => {
              return (
                <div key={imgFlota.id} className={styles.image}><img src={imgFlota.img}></img>
                </div>
              );
            })}
          </div>
          <div>
            <p className={styles.parrafoUno}>
              Contamos con la tecnología más avanzada y la mayor flota de
              repartidores con el mejor equipamiento, para asegurar que tus
              productos lleguen a tus clientes de la manera más eficiente y ágil
              posible.
            </p>
          </div>
          <div className={styles.boton}>
            <button className={styles.button}>Quiero empezar a vender</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flota;
