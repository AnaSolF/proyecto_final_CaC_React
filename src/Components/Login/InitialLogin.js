import { maincontextState } from "@/Context/maincontextprovider";
import Login from "./Login";
import Logout from "./LogOut";
import { useContext } from "react";


export default function InitialLogin( props ) {

    let context = useContext(maincontextState);
    let isLoggedIn = context.isLoggedIn;

    if (isLoggedIn){
        return <Logout/>
    } else {
        return <Login/>
    }

    //return isLoggedIn? <Logout/>:<Login/>;
}