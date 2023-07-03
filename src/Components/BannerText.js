import styles from "@/styles/BannerText.module.css";
import MyModal from "./MyModal";

export default function BannerText(props) {
  return (
    <>
      <div className={styles.contenedor}>
        <h1 className={styles.tituloDos}>{ props.text}</h1>
       
        <p className={styles.parrafo}>
         {props.parrafo}
        </p>
        <label className={styles.label}>{props.label}</label>
        <MyModal />
      </div>
    </>
  );
}
