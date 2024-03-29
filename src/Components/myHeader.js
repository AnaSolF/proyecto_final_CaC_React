import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Darkmode from "./Darkmode";
import Link from "next/link";
import { NavLink } from "react-router-dom";

export default function MyHeader(props) {
  return (
    <>
      <div className={styles.cont}>
        <div className={styles.navLarge}>
          <Navbar
            expand="lg"
            variant="light"
            bg="white"
            fixed="top"
            className={styles.bar}
          >
            <div className="container">
              <Navbar.Brand>
                <img className="logo" src="/PedidosYa.png"></img>
              </Navbar.Brand>
              <Darkmode />
              <Navbar.Brand className={styles.barra}>
                <Nav.Link
                  href="/Carrito"
                  style={{ marginRight: "20px", marginTop: "21px" }}
                  iconcart={props.iconcart}
                >
                  {props.iconcart}
                  <span style={{ marginLeft: "10px" }}>{props.textcart} </span>
                </Nav.Link>
                <Button
                  href={props.href}
                  className={styles.btnNav}
                  variant="outline-dark"
                  color="black"
                  style={{ fontSize: "12px", fontWeight: "700" }}
                  textbtn={props.textbtn}
                  iconnegocio={props.iconnegocio}
                >
                  {props.iconnegocio}
                  {props.textbtn}
                </Button>
                <img className={styles.logoP} src="/LogoP.png"></img>
                <NavDropdown
                  title=""
                  id="basic-nav-dropdown"
                  className={styles.btn}
                >
                  <NavDropdown.Item
                    style={{ fontSize: "12px" }}
                    iconhelp={props.iconhelp}
                  >
                    {props.iconhelp}
                    {props.textLinkUno}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/LoginBack"
                    style={{ fontSize: "12px" }}
                    iconlogout={props.iconlogout}
                    texto={props.textLink}
                  >
                    {props.iconlogout}
                    {props.textLink}
                  </NavDropdown.Item>
                </NavDropdown>
              </Navbar.Brand>
            </div>
          </Navbar>
        </div>

        {[false].map((expand) => (
          <Navbar key={expand} bg="white" expand={expand}>
            <div className="container-fluid">
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
                      style={{
                        fontSize: "x-large",
                        textAlign: "center",
                        paddingBottom: "20px",
                      }}
                      texto={props.titleTex}
                    >
                      {props.titleText}
                    </Offcanvas.Title>
                    <Nav.Link
                      href="/Carrito"
                      iconcart={props.iconcart}
                      textcart={props.textcart}
                    >
                      {props.iconcart}
                      {props.textcart}
                    </Nav.Link>

                    <Nav.Link
                      href="/"
                      texto={props.textLinkUno}
                      iconlogout={props.iconhelp}
                    >
                      {props.iconhelp}
                      {props.textLinkUno}
                    </Nav.Link>

                    {/* <Nav.Link href="/ItemView"
                      texto={props.textLink}
                      iconhome={props.iconhome}
                    >
                      {props.iconhome}
                      {props.textLink}
                    </Nav.Link> */}

                    <Nav.Link
                      href="/RegistroNegocio"
                      className={styles.registro}
                      texto={props.textbtn}
                      icon={props.iconnegocio}
                    >
                      {props.iconnegocio}
                      {props.textbtn}
                    </Nav.Link>

                    <Nav.Link
                      href="/LoginBack"
                      className={styles.registro}
                      texto={props.textLink}
                      icon={props.iconlogout}
                    >
                      {props.iconlogout}
                      {props.textLinkDos}
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Navbar.Brand href="/">
                <img className="logo" src="/PedidosYa.png"></img>
              </Navbar.Brand>
            </div>
          </Navbar>
        ))}
      </div>
    </>
  );
}
