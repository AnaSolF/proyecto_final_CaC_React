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
          variant="btn-btn-success"
          color="white"
          className="btn"
          onClick={() => {
            setToggle(!isToggleOn);
            setDarkmode(isToggleOn);
          }}
        >
          {isToggleOn ? <img src="\icons8-día-y-noche-50 LIGHT.png"></img> : <img src="\icons8-día-y-noche-50 LIGHT.png" ></img> }
        </Button>
      </div>
    </>
  );
}
