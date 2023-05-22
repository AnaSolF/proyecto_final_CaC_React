import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import MyButton from "./MyButton";
import Darkmode from "./Darkmode";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import MainContextProvider, { maincontextState, } from "@/Context/maincontextprovider";


export default function MyHeader(props) {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        bg="white"
        fixed="top"
        className={styles.bar}
      >
        <Container>
          <Navbar.Brand>
            <img className="logo" src="/PedidosYa.png"></img>
          </Navbar.Brand>
          <Darkmode />
          <Navbar.Brand className={styles.barra}>
            <MyButton
              className="btnNav"
              icon=<i className="bi bi-shop-window"></i>
              text="Registrá tu negocio"
              variant="outline-dark"
              color="black"
            />

            <img className={styles.logoP} src="/LogoP.png"></img>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{ fontSize: "12px" }}>
                {" "}
                <i className="bi bi-headset" style={{ marginRight: "5px" }}></i>
                Ayuda en línea
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ fontSize: "12px" }}>
                <i
                  className="bi bi-box-arrow-right"
                  style={{ marginRight: "5px" }}
                ></i>{" "}
                Iniciar sesión/ Registrarse
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {[false].map((expand) => (
        <Navbar key={expand} bg="white"  expand={expand}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Darkmode />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "80%" }}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className={darkMode ? styles.dark : styles.light}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <img className={styles.logoP1} src="/LogoP.png"></img>
                  </Nav.Link>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    style={{ fontSize: "x-large", textAlign: "center" }}
                  >
                    Qué bonito tenerte aquí
                  </Offcanvas.Title>
                  <Nav.Link href="#action2" style={{ marginBottom: "40px", marginTop:"50px" }}>
                    {" "}
                    <i
                      className="bi bi-house-door-fill"
                      style={{ marginRight: "20px"}}
                    ></i>{" "}
                    Inicio
                  </Nav.Link>
                  <Nav.Link href="#action3">
                    <i
                      className="bi bi-headset"
                      style={{ marginRight: "20px" }}
                    ></i>{" "}
                    Ayuda en línea
                  </Nav.Link>
                  <Nav.Link href="#action4" className={styles.registro}>
                    {" "}
                    <i
                      className="bi bi-box-arrow-right"
                      style={{ marginRight: "20px" }}
                    ></i>{" "}
                    Registrarse/ Iniciar sesión
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand href="#">
              <img className="logo" src="/PedidosYa.png"></img>
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
} /*En principio lo creo como un componente funcional y no de clase. Revisar*/
