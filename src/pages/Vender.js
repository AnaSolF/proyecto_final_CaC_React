import React from "react";
import styles from "../styles/vender.module.css";
import { Card } from "react-bootstrap";
import data from "../Data/Data.json";
import Iframe from "@/Components/Iframe";

const Vender = () => {
  const { vender } = data;
  const { cards } = data;
  const { imgFlota } = data;
  const { MarcasImg } = data;

  return (
    <>
      <div className={styles.funcional}>
        <div className={styles.titles}>
          <h4 style={{ fontSize: "35px" }}>Comenzar a</h4>
          <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>Vender</h2>
          <h4 style={{ fontSize: "35px" }}>Es así de simple</h4>
        </div>
        <div className={styles.funcional}>
        <div className={styles.cards}>
          {vender.map((card, key) => {
            return (
              <div key={card.id}className={styles.cardsFunc}>
                <Card.Body className={styles.cardBody}>
                  <Card.Img src={card.imagen} className={styles.cardsImageFunc} />
                    <Card.Text className={styles.textFunc}>{card.texto}</Card.Text>
                </Card.Body>
              </div>
            );
          })}
          <div className={styles.parrafoOne}>
          Además, te compartiremos distintos entrenamientos para que todo quede
          claro durante el proceso y puedas potenciar tus ventas desde el primer
          día.
        </div>
        </div>
       
        </div>
        </div>

      {/* HISTORIA */}
      <div className={styles.historia}>
        <div className={styles.titleHist}>
          <p>Una historia de</p>
          <h2>Crecimiento</h2>
        </div>
        <p className={styles.parrafo}>
          Te compartimos una de las tantas historias de éxito de nuestros socios
          comerciales. Vos también podés hacer crecer tu negocio. ¡Iniciá ahora
          tu registro!
        </p>
        <button className={styles.button}>Registrarme ya</button>
        <div className={styles.videoLarge}>
          <Iframe
            width="560px"
            height="315px"
            src="https://www.youtube.com/embed/0v4dBiIbwsY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>

        <div className={styles.video}>
          <Iframe
            width="300px"
            height="230px"
            src="https://www.youtube.com/embed/0v4dBiIbwsY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>

      {/* Gestion */}

      <div className={styles.gestion}>
        <div className={styles.titleGest}>
          <p>Gestionamos</p>
          <h2>
            7 pedidos <br></br> por segundo
          </h2>
        </div>
        <div className={styles.imagenGest}>
          <img className={styles.imgGest} src="/blue-pink-center.jpg"></img>
        </div>
        <p className={styles.parrafoGest}>
          Con la app de delivery más usada de Latinoamérica, tu local puede ser
          el local más elegido de tu zona. Súmate a la plataforma más grande y
          llega a miles de nuevos clientes.
        </p>
        <button className={styles.buttonGest}>Quiero vender más</button>
      </div>

      {/* Funcionamos */}

      <div className={styles.titles} ><h2>Así funcionamos</h2></div> 
      <div className={styles.funcional}>
          {cards.map((card, key) => {
            return (
              <div key={card.id}className={styles.cardsFunc}>
                <Card.Body className={styles.cardBody}>
                  <Card.Img src={card.img} className={styles.cardsImageFunc} />
                    <Card.Text className={styles.textFunc}>{card.text}</Card.Text>
                </Card.Body>
              </div>
            );
          })}
        </div>
    
      {/* Flota */}
      <div className={styles.flota}>
        <div>
          <div className={styles.tituloFlot}>
            <h2>{"La flota más grande"}</h2>
          </div>
          <div className={styles.tituloFlot}>
            <h6>de Latinoamérica</h6>
          </div>
          <p className={styles.parrafoFlot}>
            Sólo tendrás que ocuparte de preparar el mejor pedido. ¡De
            entregarlo nos encargamos nosotros!
          </p>
          <div className={styles.imagenesFlot}>
            {imgFlota.map((imgFlota, Key) => {
              return (
                <div key={imgFlota.id} className={styles.imageFlot}>
                  <img src={imgFlota.img}></img>
                </div>
              );
            })}
          </div>
          <div>
            <p className={styles.parrafoUnoFlot}>
              Contamos con la tecnología más avanzada y la mayor flota de
              repartidores con el mejor equipamiento, para asegurar que tus
              productos lleguen a tus clientes de la manera más eficiente y ágil
              posible.
            </p>
          </div>
          <div className={styles.botonFlot}>
            <button className={styles.buttonFlot}>
              Quiero empezar a vender
            </button>
          </div>
        </div>
      </div>

      {/* Marcas */}
      <div className={styles.marcas}>
        <div className={styles.tituloMarc}>
          <h3>Marcas que</h3>
          <h2 className={styles.h2}>nos eligen</h2>
        </div>
        <div className={styles.contenedorMarc}>
        <button className={styles.btnMarc}><img src="icons8-chevron-izquierda-en-círculo-50.png"></img></button>
          <div className={styles.sliderMarc}>
          
            {MarcasImg.map((MarcasImg, key) => {
              return (
                <div key={MarcasImg.id} className={styles.marcasI}>
                  <img className={styles.imagenMarc} src={MarcasImg.img} />
                </div>
              );
            },
            )}
          </div>
          <button className={styles.btnMarc}><img src="icons8-chevron-derecha-en-círculo-50.png"></img></button>
        </div>
      </div>
    </>
  );
};

export default Vender;
