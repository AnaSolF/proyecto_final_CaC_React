import React from "react";
import styles from "../styles/marcas.module.css";
import data from "../Data/Data.json";

const Marcas = () => {
  const { MarcasImg } = data;
  return (
    <>
      <div className={styles.marcas}>
        <div className={styles.titulo}>
          <h3>Marcas que</h3>
          <h2 className={styles.h2}>nos eligen</h2>
        </div>
        <div className={styles.contenedor}>
        <button className={styles.btn}><img src="icons8-chevron-izquierda-en-círculo-50.png"></img></button>
          <div className={styles.slider}>
          
            {MarcasImg.map((MarcasImg, key) => {
              return (
                <div key={MarcasImg.id} className={styles.marcasI}>
                  <img className={styles.imagen} src={MarcasImg.img} />
                </div>
              );
            },
            )}
          </div>
          <button className={styles.btn}><img src="icons8-chevron-derecha-en-círculo-50.png"></img></button>
        </div>
      </div>
    </>
  );
};

export default Marcas;
