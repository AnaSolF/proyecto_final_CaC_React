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
  const categoria = [
    "Bebidas",
    "Café",
    "Carnicería",
    "Farmacia",
    "Flores y plantas",
    "Frutas y verduras",
    "Librería/Papelería",
    "Mascotas",
    "Panaderías/Pastelerías",
    "Pastelería",
    "Regalos & accesorios",
    "Restaurantes",
    "Salud & belleza",
    "Suplementos",
    "Tienda natural y productos saludables/ Dietética",
  ];

  return (
    <>
      <div className={darkMode ? styles.dark : styles.inputGroup}>
        <h5>Registro de tu local</h5>
        <FormControl>
          <MyInput
            className={styles.grupo}
            type="text"
            placeholder="Nombre del local"
          />
          <div className={styles.groupOne}>
            <select name="pets" id="pet-select" style={{width:"50%", height:"38px", marginTop:"29px", borderRadius:"5px", border:"1px, solid, lightgray"}}>
              <option value="">Categoría</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Farmacia">Farmacia</option>
              <option value="Salud">Salud & belleza</option>
              <option value="Panaderías">Panaderías/Pastelerías</option>
              <option value="Restaurantes">Restaurantes</option>
              <option value="Regalos">Regalos & accesorios</option>
            </select>

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

          <MyInput type="password" placeholder="Password" />

          <button className={styles.btn} onClick={() => console.log("Primary")}>
            Comenzar
          </button>
        </FormControl>
      </div>
    </>
  );
};

export default FormRegistroLocal;
