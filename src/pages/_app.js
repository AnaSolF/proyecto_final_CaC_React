import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { App } from "@/firebase/InitConfig"
import "@mui/material"

export default function App({ Component, pageProps }) {
  return (<><Component {...pageProps} />
 
  </>
  )
};
 