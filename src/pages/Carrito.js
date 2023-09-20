import React, { useState, useEffect } from "react";
import styles from "../styles/carrito.module.css";
import MyHeader from "@/Components/myHeader";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";
import { useMainContextProvider } from "@/Context/maincontextprovider";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
import ButtonPlus from "@/Components/ButtonPlus";
import { Button } from "react-bootstrap";
import Link from "next/link";
//Importo el contexto que quiero usar

const Carrito = (props) => {
  let [contador, setContador] = useState(0);
  const { cart } = useMainContextProvider();
  const { setCart } = useMainContextProvider();
  var newCart = [];
  var unProd = [];
  const router = useRouter()

  useEffect(() => {
    mostrar();
  }, []);

  // Función para calcular el precio total
  const calcularPrecioTotal = (precio, cantidad) => {
    return precio * cantidad;
  };
  const mostrar = () => {
    if (typeof window !== "undefined") {
      newCart = JSON.parse(localStorage.getItem("cart"));
      unProd = newCart[0]
      console.log(unProd)
      for (const producto in unProd) {
        console.log(producto)
        return unProd
      }
      
    }
  };

  let nuevoCarrito = mostrar();
  console.log(nuevoCarrito.nombre)

  // Manejar el clic en el botón "Agregar"
  // const handleAgregarClick = (producto, cantidad) => {
  //   const precioTotal = calcularPrecioTotal(producto.precio, cantidad);
  //   let newCArt = cart.push(producto)
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(precioTotal);
  //   return precioTotal;
  // };

  // const sumar = () => {
  //   let [total, setTotal] = useState([]);
  //   total.push(precioTotal)
  // }

  return (
    <>
      <div className={styles.carritoContainer}>
        <MyHeader
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn=" Regresar"
          textLinkUno="Ayuda en línea"
          textcart=" Mis compras"
          textLinkDos=" Salir"
          textLink=" Salir"
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          iconlogout={<IconLogout />}
        />
        <div className={styles.carrito}>
          <h2 className={styles.title}>Su carrito está vacío</h2>
          <h2 className={styles.title}>Mi Compra</h2>
            <div className={styles.products}>
            {nuevoCarrito.nombre}
            <ButtonPlus cantidad={contador} setCantidad={setContador} />
            <p>PRECIO $ {nuevoCarrito.precio}</p> 
            <p>TOTAL $ {nuevoCarrito.precio * contador}</p> 
            <Button style={{width:"30%", margin:"0 auto", marginBottom:"30px"}}>Comprar</Button>
          <Link className={styles.link} href={"/SesionUsuario"}>Agregar mas</Link>
          </div>
         
        </div>
        
        {/* {newCart.map((producto, key) => {
        <div key={producto.id} className={styles.products}>
        <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.Title}>
                  {producto.nombre}
                </Card.Title>
                <Card.Text className={styles.p}>
                  {producto.descripcion}
                </Card.Text>
                <Card.Text>
                  <strong>$ {contador * producto.precio}</strong>
                </Card.Text>
                <ButtonPlus cantidad={contador} setCantidad={setContador} />
                <Button
                  //href="/Carrito"
                  variant="outline"
                  onClick={() => {
                    handleAgregarClick(producto, contador);
                  }}
                >
                  <strong>+ Agregar</strong>
                </Button>
              </Card.Body>
            </Card>
        </div>;
        })}
         */}

        <MyFooter />
      </div>
    </>
  );
};

export default Carrito;
