const defaultState = {
    language : "es",
    darkMode : false,
    isLoggedIn: false,
    username : "anonymous"
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
        localStorage.setItem("contextState", JSON.stringify(newcontextState))
    }
    return newcontextState;
}
