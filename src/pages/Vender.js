import React from "react";
import styles from "../styles/vender.module.css";

const Vender = () => {
  return (
    <>
      <div className={styles.vender}>
        <div className={styles.titles}>
        <h4 style={{fontSize:"35px"}}>Comenzar a</h4>
        <h2 style={{fontSize:"50px", fontWeight:"bold" }}>Vender</h2>
        <h4 style={{fontSize:"35px"}}>Es así de simple</h4>
        </div>

        <div className={styles.images}>
          <div className={styles.image}>
            <div className={styles.imgP}>
            <img src="\icon-step-a.svg"></img>
              <p className={styles.parrafo}>Registra tus datos y la información bancaria de tu local.</p>
            </div>
            <div className={styles.imgP}>
            <img src="\icon-step-b.svg"></img>
              <p className={styles.parrafo}>Carga tu menú, horarios y logo en nuestro portal de autogestión.</p>
              </div>
        </div>

          <div className={styles.image}>
          <div className={styles.imgP}>
            <img src="\icon-step-c.svg"></img>
              <p className={styles.parrafo}>Prueba tu sistema de recepción de pedidos.</p>
            </div>
            <div className={styles.imgP}>
            <img src="\icon-step-d.svg"></img>
              <p className={styles.parrafo}>¡Y listo! ¡Recibe tus primeros pedidos en nuestra plataforma!</p>
              </div>
          </div>

          </div>
          <div className={styles.parrafoOne}>
          Además, te compartiremos distintos entrenamientos para que todo quede claro durante el proceso y puedas potenciar tus ventas desde el primer día.
        </div>
        
        </div>
    </>
  );
};

export default Vender;
