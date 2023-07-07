import { useContext } from "react";
import { maincontextState } from "@/Context/maincontextprovider";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import IconBtnBlack from "./Icons/IconBtnBlack";
import IconBtnWhite from "./Icons/IconBtnWhite";

// Lo pasamos a funcional al tener contexto...
export default function Darkmode(props) {
  const { darkMode, setDarkmode } = useContext(maincontextState);
  let [isToggleOn, setToggle] = useState({ darkMode });

  return (
    <>
      <Button
        variant=""
        className=""
        onClick={() => {
          setToggle(!isToggleOn);
          setDarkmode(isToggleOn);
        }}
      >
        {isToggleOn ? <IconBtnBlack /> : <IconBtnWhite />}
      </Button>
    </>
  );
}
