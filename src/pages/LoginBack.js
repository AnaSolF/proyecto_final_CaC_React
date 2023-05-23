import { Nav } from "react-bootstrap";
import styles from "@/styles/LoginBack.module.css";
import Login from "./Login";

export default function LoginBack() {
  return (
    <>
      <div className={styles.loginBack}>
        <Login />
      </div>
    </>
  );
}
