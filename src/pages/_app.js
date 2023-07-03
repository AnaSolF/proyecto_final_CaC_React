import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { app } from "@/firebase/InitConfig"
import "@mui/material"

export default function App({ Component, pageProps }) {
  return (<><Component {...pageProps} />
 
  </>
  )
};
 