import styles from "../styles/Hist.module.css"
import React from 'react'
import { Button } from "react-bootstrap";
import Iframe from "@/Components/Iframe";

const Historia = () => {
  return (
      <div className={styles.historia}>
          <div className={styles.title}><p>Una historia de</p><h2>Crecimiento</h2></div>
          <p className={styles.parrafo}>Te compartimos una de las tantas historias de éxito de nuestros socios comerciales. Vos también podés hacer crecer tu negocio. ¡Iniciá ahora tu registro!</p>
        <button className={styles.button}>Registrarme ya</button>
          <div className={styles.videoLarge}>
              <Iframe
                  width="560px"
                  height="315px"
                  src="https://www.youtube.com/embed/0v4dBiIbwsY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </div>

          <div className={styles.video}>
              <Iframe
                  width="300px"
                  height="230px"
                  src="https://www.youtube.com/embed/0v4dBiIbwsY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </div>


    </div>
  )
}

export default Historia;