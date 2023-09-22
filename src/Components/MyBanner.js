import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import BannerText from "./BannerText";
import styles from "@/styles/Banner.module.css";
import MyModal from "./MyModal";

export default function MyBanner(props) {
  return (
    <>
      {/* <h1>{props.title}</h1>
        <span>{props.text}</span> */}

      <BannerText
        text="Delivery de comida online"
        parrafo=" Más de 10.000 restaurantes con delivery en Argentina"
        label="Veamos qué tenés cerca"
      />
      <div>
      <Card className={styles.inicio}>
          <Card.Img src={props.src} className={styles.BackImg} style={{width:"100%"}}></Card.Img>
        <Card.ImgOverlay className={styles.BackImg}>
          <Container className={styles.cont}>
            <Row>
              <Col>
                <div className={styles.banner}>
                  <Card.Title className="text-center text-light fs-1">
                    {props.title}
                  </Card.Title>
                  <Card.Text className="text-center text-light fs-5 ">
                    {props.text}
                  </Card.Text>
                </div>
              </Col>
            </Row>
            <Row className={styles.inputB}>
              <Col className="col-9">
                  <MyModal />
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
        </Card>
        </div>
    </>
  );
}
