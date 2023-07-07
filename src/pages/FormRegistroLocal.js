import React from "react";
// import InputGroup from 'react-bootstrap/InputGroup';
import styles from "../styles/formRegistroLocal.module.css";
// import Form from 'react-bootstrap/Form';
import FormControl from "@mui/material/FormControl";
import MyInput from "@/Components/MyInput";
import MainContextProvider from "@/Context/maincontextprovider";
import Darkmode from "@/Components/Darkmode";
import { useContext } from "react";
import { maincontextState } from "@/Context/maincontextprovider";

const FormRegistroLocal = () => {
  let context = useContext(maincontextState);
  let darkMode = context.darkMode;
  let newcontextState = darkMode;
  const names = [
    "Bebidas",
    "Café",
    "Carnicería",
    "Congelados",
    "Farmacia",
    "Ferretería- Tienda de materiales",
    "Flores y plantas",
    "Frutas y verduras",
    "Gourmet/Fiambrería",
    "Kioscos",
    "Lácteos",
    "Librería/Papelería",
    "Mamás & bebés/Pañales",
    "Mascotas",
    "Minimercados",
    "Panaderías/Pastelerías",
    "Pasta Fresca",
    "Pastelería",
    "Regalos & accesorios",
    "Restaurantes",
    "Salud & belleza",
    "Suplementos",
    "Tienda natural y productos saludables/ Dietética",
    "Vapes y tabaco",
  ];

  return (
    <>
      <div className={darkMode ? styles.dark : styles.inputGroup}>
     
        <h5>Registro de tu local</h5>
        <FormControl>
        <MyInput type="text" placeholder="Nombre del local" />
        <div className={styles.groupOne}>
          <MyInput
            className={styles.input}
            type="text"
            placeholder="Tipo de negocio"
          />
          <MyInput
            className={styles.input}
            type="number"
            placeholder="Sucursales"
          />
        </div>
        <div className={styles.groupOne}>
          <MyInput type="text" placeholder="Nombre " />

          <MyInput type="text" placeholder="Apellido" />
        </div>
        <div className={styles.groupOne}>
          <MyInput type="number" placeholder="Teléfono" />

          <MyInput type="email" placeholder="e-mail" />
        </div>

        <MyInput
        type="password" placeholder="Password"
        />
       
        <button className={styles.btn} onClick={() => console.log("Primary")}>
          Comenzar
          </button>
          </FormControl>
        </div>
      
    </>
  );
};

export default FormRegistroLocal;
