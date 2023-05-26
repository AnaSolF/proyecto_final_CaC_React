import { maincontextState } from "@/Context/maincontextprovider";
import { useContext } from "react";

export default function CustomLogin() {

    // let context = useContext(maincontextState);
    // let lan = context.language;
    // const CURRENT_LANGUAGE = LANGUAGES[lan];

    // function submitFunction ( event ) {
    //     console.log("Estoy invocando la funcion submit...")
    //     event.preventDefault();
    //     // Revisar que el target event es el correcto o no...
    //     validateForm(event);
    //     // fetch a backend...
    //     // O envio de data a firebase..
    // }

    // return (
    //     <>
    //         <form onSubmit={ ( event ) => submitFunction(event) } method="POST">
    //             <div>
    //                 <label>{ CURRENT_LANGUAGE.USEREMAIL }</label>
    //                 <input
    //                     type="text"
    //                     name="email"
    //                     onChange={ () => console.log("callback llamado..")}
    //                 />
    //             </div>
    //             <div>
    //                 <lable>{ CURRENT_LANGUAGE.PASSWORD }</lable>
    //                 <input
    //                     type="password"
    //                     name="password"
    //                     onChange={ () => console.log("callback durante el ingreso..")}
    //                 />
    //             </div>
    //             <div>
    //                 <button type="submit">
    //                     { CURRENT_LANGUAGE.SUBMIT }
    //                 </button>
    //             </div>
    //         </form>
            
    //     </>
    // )
}