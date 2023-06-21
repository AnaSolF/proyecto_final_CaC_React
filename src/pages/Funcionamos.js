import React from "react";
import styles from "../styles/funcionamos.module.css";
import { Card } from "react-bootstrap";
import  data from "../Data/data.json"

const Funcionamos = () => {
  const { cards } = data;
 return (
    <>
   <div className={styles.titles} ><h2>Así funcionamos</h2></div> 
    <div className={styles.funcional}>
      <div className={styles.cards}>
      {cards.map((card, key) => {
            return (
              <div key={card.id} className={styles.cardsImage}>
                <Card.Img src={card.img} />
                <div className={styles.title}><h5>{...card.title }</h5></div>
                <div className={styles.text}>
                  <Card.Text>{...card.text }</Card.Text>
                </div> 
              </div>
            );
          })}
    </div>
      </div>
      </>
  );

};

export default Funcionamos;
