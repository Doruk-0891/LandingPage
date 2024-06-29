import React from "react";
import styles from './Button.module.css';

const Button = ({children}) => {
    return <button className={styles.button}>{children}</button>
}

export const RoundButton = ({children}) => {
    return <button className={styles.roundButton}>{children}</button>
}

export default Button;