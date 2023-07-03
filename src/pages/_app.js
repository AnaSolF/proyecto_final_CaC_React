import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "@/firebase/InitConfig"
import "@mui/material"
import { BrowserRouter, Route, Routes, Router, Link, Rout, Switch } from 'react-router-dom'
import Grido from './Grido'
import SesionUsuario from './SesionUsuario'
import GridoContainer from './GridoContainer'
import LoginBack from './LoginBack'
import McDonalds from './McDonalds'

export default function App({ Component, pageProps }) {
  return (<><Component {...pageProps} />
 
  </>
  )
};
 