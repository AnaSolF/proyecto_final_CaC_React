const defaultState = {
    darkMode : false,
    isLoggedIn: false,
    username: "anonymous",
    cart: []
}
//Almaceno el defaultState en localStorage
export default function getInitialState() {
    if (typeof window !== 'undefined') {
     localStorage.setItem( "defaultState", JSON.stringify(defaultState));
    }
    return defaultState;
}

export function saveContextState ( newcontextState ) {
    if (typeof window !== 'undefined') {
        localStorage.setItem("newContextState", JSON.stringify(newcontextState.isLoggedIn))
    }
    return newcontextState;
}
