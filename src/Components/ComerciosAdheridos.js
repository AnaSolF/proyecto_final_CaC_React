import CardsComercios from "./CardsComercios";
import styles from "@/styles/Comercios.module.css";
import data from "../Data/data.json"

export default function ComerciosAdheridos(props) {

  const { cardsImg } = data;
  return (
    <>
      <div>
        <h6 className={styles.titulo}>Los mejores restaurantes</h6>
        <div
          className={styles.slider}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {cardsImg.map((cardImg, key) => {
            return (
              <div className={styles.tarjeta} key={cardImg.id}>
                <CardsComercios src={ cardImg.imagen } />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
