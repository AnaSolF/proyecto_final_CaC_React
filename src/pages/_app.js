import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { app } from "@/firebase/InitConfig";
import "@mui/material";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
