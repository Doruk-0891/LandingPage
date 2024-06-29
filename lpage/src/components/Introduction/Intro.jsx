import React from "react";
import styles from './Intro.module.css';

const Intro = ({data}) => {
    const {heading, subHeading} = data;
    return (
        <div className={styles.introContainer}>
            <div className={styles.introHeading}>
                <h2>Let's Inroduce Ourself</h2>
            </div>
            <div className={styles.introContent}>
                <h4>{heading}</h4>
                <p>{subHeading}</p>
            </div>
        </div>
    );
}

export default Intro;