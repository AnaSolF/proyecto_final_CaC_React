import React from 'react';
import styles from "../styles/loadingScreen.module.css"

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
    <img className={styles.loadingScreenIcon} src="/descarga.gif" alt="pokedex" /></div>
  )
}

export default LoadingScreen