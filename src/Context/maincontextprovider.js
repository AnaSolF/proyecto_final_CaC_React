import { createContext } from "react";
import { useState } from "react";
import getInitialState from "./maincontext";

const maincontextState = createContext([{}, () =>{} ]);

export default function MainContextProvider ( { children }) {

    const [ context, setContext ] = useState(getInitialState());

    const setDarkMode = (darkMode) => {
        setContext({...context, ['darkMode']: darkMode })
    }

 //agrego función para setear isLoggedIn
    
    const setIsLoggedIn = (isLoggedIn) => {
        setContext({...context, ["isLoggedIn"]: isLoggedIn})
    }
    
//agrego función para setear username

    const setUsername = (username) => {
        setContext({...context, ["username"]: username})
    }
    
    return (
        <>
            <maincontextState.Provider value={{ darkMode: context.darkMode, setDarkmode: setDarkMode, isLoggedIn: context.isLoggedIn, username: context.username }}>
                {children}
            </maincontextState.Provider>
        </>
    );
    
}

export { maincontextState };