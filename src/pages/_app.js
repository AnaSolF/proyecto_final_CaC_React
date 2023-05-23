import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />)
}
