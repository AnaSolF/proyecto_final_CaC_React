import Button from "@mui/material/Button";
import styles from "@/styles/Btn.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from '@mui/material/Link';

export default function BtnsOtroMetodo() {
  return (
    <>
      <div className={styles.Contenido}>
        <h6
          style={{
            textAlign: "center",
            paddingTop: "60px",
            paddingBottom: "30px",
            borderBottom: "1px solid grey",
          }}
        >
          Otro método
        </h6>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          className={styles.MyButton}
        >
          {"Continuar con teléfono"}
        </Button>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          className={styles.MyButton}
        >
         <Link href="/CustomLogin">{"Continuar con e-mail"}</Link> 
        </Button>
      </div>
    </>
  );
}
