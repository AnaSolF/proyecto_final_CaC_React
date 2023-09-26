import React from 'react'
import styles from "../styles/registroLocalText.module.css"

const RegistroLocalText = () => {
  return (
    <>
      <div className={styles.text}>
        <h2 style={{ fontSize: "40px", marginBottom: "20px", paddingTop:"50px" }}>Empezá a vender en la app <strong>líder en delivery online de Latinoamérica</strong></h2>

        <div className={styles.parrafo}>
          <p className={styles.items}><img className={styles.items} src='\icons8-flecha-derecha-larga-24.png'></img>El mejor canal de ventas para tu local</p>

          <p className={styles.items}><img src='\icons8-flecha-derecha-larga-24.png'></img>En el bolsillo de millones de usuarios</p>

          <p className={styles.items} ><img src='\icons8-flecha-derecha-larga-24.png'></img>El sistema de entregas más avanzado</p>

          <p className={styles.items}><img src='\icons8-flecha-derecha-larga-24.png'></img>Todo tu menú online y autogestionable</p>

         <h4 style={{ marginTop:"20px"}}>¡Registrá tu local ahora mismo!</h4>
          <div className={styles.promo}><div className={styles.promoNumber}>10% </div> <div className={styles.promoText}>de comisión</div>
            <div className={styles.promoTextDos}>Durante los <br></br>primeros 30 días</div>
          </div>
      </div>
      
      </div>
    </>
    
  )
}

export default RegistroLocalText