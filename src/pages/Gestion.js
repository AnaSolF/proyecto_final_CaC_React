import React from "react";
import styles from "../styles/Gestion.module.css";


const Gestion = () => {
  return (
    <div className={styles.gestion}>
      <div className={styles.title}>
        <p>Gestionamos</p>
        <h2>7 pedidos <br></br> por segundo</h2>
          </div>
          <div className={styles.imagen}>
         <img className={styles.img} src="/blue-pink-center.jpg"></img>
          </div>  
      <p className={styles.parrafo}>
      Con la app de delivery más usada de Latinoamérica, tu local puede ser el local más elegido de tu zona. Súmate a la plataforma más grande y llega a miles de nuevos clientes.
        </p>
        <button className={styles.button}>Quiero vender más</button>
    </div>
  );
};

export default Gestion;
