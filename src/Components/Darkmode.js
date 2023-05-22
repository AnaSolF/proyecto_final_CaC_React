import { Component, useContext } from "react";
import { maincontextState } from "@/Context/maincontextprovider";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "@/styles/Home.module.css";

// Lo pasamos a funcional al tener contexto...
export default function Darkmode() {
  const { darkMode, setDarkmode } = useContext(maincontextState);
  let [isToggleOn, setToggle] = useState({ darkMode });

  return (
    <>
      <div className={styles.boton}>
        <Button
          variant=""
          color="white"
          className=""
          widht="30px"
          onClick={() => {
            setToggle(!isToggleOn);
            setDarkmode(isToggleOn);
          }}
        >
          {isToggleOn ? <img src="\icons8-sol (1).gif"></img> : <img src="\icons8-sol (1).gif" ></img> }
        </Button>
      </div>
    </>
  );
}
