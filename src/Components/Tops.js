import styles from "@/styles/Tops.module.css";
import { Image } from "react-bootstrap";

export default function Tops() {
  let cards = [
    {
      img: "Ubicación.svg",
      titulo: "Top Ciudades",
      parrafo:
        "La Plata, Rosario, San Isidro, Córdoba, Buenos Aires, Vicente Lopez.",
    },
    {
      img: "Barrios.svg",
      titulo: "Top Barrios",
      parrafo:
        " Palermo, Caballito, Belgrano, Recoleta, Microcentro, Nueva Córdoba.",
    },
    {
      img: "comidas.svg",
      titulo: "Top Comidas",
      parrafo: "Sushi, Picadas, Empanadas, Desayunos, Helados, Pizzas.",
    },
  ];

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.nuevo}>
          <h5>Delivery que satisface los sentidos</h5>
          <br></br>
          <p>
            ¿Con Hambre y nada te copa? Acá tu Comida Sabrosa, Hoy Puede Tener
            otro Gusto. Pedi Ya, Te Llena el Corazón.
          </p> <br></br>

          {cards.map((card) => {
            return (
              <>
                <div className={styles.tops}>
                  <div className={styles.destacado}>
                    <Image
                      src={card.img}
                      className={styles.imagen}
                      key={card.img}
                    />
                    <div>
                      <h6 key={card.titulo}>{card.titulo}</h6>
                      <p key={card.parrafo}>{card.parrafo}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
