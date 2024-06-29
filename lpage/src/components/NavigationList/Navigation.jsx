import React from "react";
import styles from './Navigation.module.css';

const Navigation = ({tabs}) => {
    return (
        <ul className={styles.navList}>
            {
                tabs.map(tab => <li>{tab}</li>)
            }
        </ul>
    );
}

export default Navigation;