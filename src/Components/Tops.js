import styles from "@/styles/Tops.module.css";
import { Image } from "react-bootstrap";

export default function Tops() {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.nuevo}>
        <h5>Delivery que satisface los sentidos</h5><br></br>
        <p>
          ¿Con Hambre y nada te copa? Acá tu Comida Sabrosa, Hoy Puede Tener
          otro Gusto. Pedi Ya, Te Llena el Corazón.
        </p>
       
        <div className={styles.tops}>
          <div className={styles.destacado}>
            <Image src="Ubicación.svg" className={styles.imagen} />
            <div>
              <h6>Top Ciudades</h6>
              <p>
                La Plata, Rosario, San Isidro, Córdoba, Buenos Aires, Vicente
                Lopez.
              </p>
            </div>
          </div>

          <div className={styles.destacado}>
            <Image src="Barrios.svg" className={styles.imagen} />
            <div>
              <h6>Top Barrios</h6>
              <p>
                Palermo, Caballito, Belgrano, Recoleta, Microcentro, Nueva
                Córdoba.
              </p>
            </div>
          </div>

          <div className={styles.destacado}>
            <Image src="comidas.svg" className={styles.imagen}/>
            <div>
              <h6>Top Comidas</h6>
              <p>Sushi, Picadas, Empanadas, Desayunos, Helados, Pizzas.</p>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}
