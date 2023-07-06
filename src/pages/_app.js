import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { app } from "../firebase/InitConfig";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginBack from "./LoginBack";
import MyMain from "@/Components/myMain";

export default function App({ Component, pageProps }) {
  return (
   
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
    
  );
}
