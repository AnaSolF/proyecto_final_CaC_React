import CardsComercios from "./CardsComercios";
import styles from "@/styles/Comercios.module.css";

export default function ComerciosAdheridos(props) {
  let cardsImg = [
    "Burger_King_logo_(1999).svg.png",
    "logoCarrefour.png",
    "mcdonalds-logo.webp",
    "logos-2019-01.jpg",
    "logoWallmart.png",
    "barilocheLogo.jpg",
    "GlupsLogo.png",
  ];
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
          {cardsImg.map((cardImg) => {
            return (
              <div className={styles.tarjeta} key={cardImg}>
                <CardsComercios  src={cardImg} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
