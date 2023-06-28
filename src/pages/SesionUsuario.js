import styles from "../styles/sesionUsuario.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// import { collection, query, where, getDocs } from "firebase/firestore";

//Traer servicio de firestore
//Crear un puntero al dato que queremos traer
//Traer el dato con una promesa

export default function SesionUsuario() {

    const [data, setData] = useState({});
    const { detalleId } = useParams();
    useEffect(() => {
        const queryDb = getFirestore()//Traer Firestore
        const queryDoc = doc(queryDb, "Negocios", "Bo0Hg652pgnw1rkHH4Sl")//Apuntar al documento
        getDoc(queryDoc)//Traer el doc 
            //getDoc(doc(getFirestore(),"Negocios", "hUBvoX3L0I5KFpQ9UjPo"))//Ponemos todo junto
            .then( res => setData({ id: res.id, ...res.data() }))
    }, [])
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img className={styles.logo} src="/PedidosYa.png"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Carrito">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-cart-plus-fill"
                viewBox="0 0 20 20"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
              </svg>
              {/* <div>{ cantidad }</div>*/}
            </Nav.Link>
            <Nav.Link href="/LogOut" style={{ paddingLeft: "25px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          <div>    
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={data.imagen}  />
            <Card.Body>
            <Card.Title>{data.nombre}</Card.Title>
              <Card.Text>
                {data.descripcion}
            </Card.Text>
            <Card.Text>
                {data.precio}
            </Card.Text>         
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
          {/* <Card.Img src={data.imagen} width="200px" height="300px" /> */}
      </div>
    </>
  );
}
