import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Darkmode from "./Darkmode";

export default function MyHeader(props) {
  return (

    <>
      <div>
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
              <Button
                href="/Negocios"
                className="btnNav"
                variant="outline-dark"
                color="black"
                style={{ fontSize: "12px", fontWeight: "700" }}
              >
                <i
                  className="bi bi-shop-window"
                  style={{ marginRight: "5px" }}
                ></i>
                Registrá tu negocio
              </Button>
              <img className={styles.logoP} src="/LogoP.png"></img>
              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item

                  style={{ fontSize: "12px" }}
                >
                  <i
                    className="bi bi-headset"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Ayuda en línea
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/LoginBack"
                  style={{ fontSize: "12px" }}
                >
                  <i
                    className="bi bi-box-arrow-right"
                    style={{ marginRight: "5px" }}
                  ></i>
                  {"Iniciar sesión/ Registrarse"}
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Brand>
          </Container>
        </Navbar>
        {[false].map((expand) => (
          <Navbar key={expand} bg="white" expand={expand}>
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
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
                    <Nav.Link href="/" style={{ marginTop: "20px" }}>
                      <i
                        className="bi bi-house-door-fill"
                        style={{ marginRight: "20px" }}
                      ></i>
                      {"Inicio"}
                    </Nav.Link>
                    <Nav.Link href="/Test">
                      <i
                        className="bi bi-headset"
                        style={{ marginRight: "20px" }}
                      ></i>
                      {"Ayuda en línea "}
                    </Nav.Link>
                    <Nav.Link  href="/LoginBack" className={styles.registro}>
                      <i
                        className="bi bi-box-arrow-right"
                        style={{ marginRight: "20px" }}
                      ></i>
                      {"Registrarse "}/{"Iniciar sesión"}
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
        </div>
    </>
  );
}
