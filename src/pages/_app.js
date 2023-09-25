import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import React from "react";
import MainContextProvider from "@/Context/maincontextprovider";
import AuthContextProvider from "../Context/AuthContext"

export default function App({ Component, pageProps }) {
 
  return (
    <AuthContextProvider>
      <MainContextProvider>
        <SSRProvider> 
          <Component {...pageProps} />
        </SSRProvider>
      </MainContextProvider>
      </AuthContextProvider>
  );
}
