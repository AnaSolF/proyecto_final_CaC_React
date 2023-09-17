import React, { useState } from "react";
import { useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/InitConfig";
import { useRouter } from "next/router";

//Creamos el contexto y lo exportamos
export const AuthContext = React.createContext();
export const useAuthContextProvider = () => useContext(AuthContext); //HOOK PERSONALIZADO: Función que retorna el AuthContext. Podemos hacer lo mismo con otros contextos.

const AuthContextProvider = ({ children }) => {
  //Ejemplo otro LOGIN (15/09/23)
  const [user, setUser] = useState({ email: "", password: "" });
  //Envolvemos con el primer contexto y con el segundo (como los separé, ahora están en app) y pasamos los values para c/u
  const auth = getAuth();
  const router = useRouter("");

  function validateEmail(email) {
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validateEmail(email)) {
      alert("Ingrese un email válido");
    } else {
      return emailRegex.test(user.email);
    }
  }

  function validatePassword(password) {
    // Validar contraseña
    return password.length >= 6 && password != null;
  }

  function handleRegister(email, password) {
    validateEmail(user.email);
    validatePassword(user.password);
  }

  const signup = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        alert("Registro exitoso!")
        router.push("/CustomLog");
        handleRegister(email, password);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          alert("Verifique que su email no se encuentre registrado");
        }
        if (errorCode === "auth/invalid-email") {
          alert("Email inválido");
        }
        if (
          errorCode === "auth/missing-password" ||
          errorCode === "auth/weak-password"
        ) {
          alert("Ingrese un password de más de 6 caracteres");
        }
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((credentials) => {
        const user = credentials.user;
        alert("Será redireccionado a su Sesión");
        router.push("/SesionUsuario");
        handleRegister(email, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if (errorCode === "auth/user-not-found") {
          alert("Usuario no registrado");
        }
        if (errorCode === "auth/wrong-password") {
          alert("Contraseña incorrecta");
        }
      });
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signup,
        auth,
        handleRegister,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
