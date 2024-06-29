import React from "react";
import styles from './Hero.module.css';
import HeroImage from '../../assets/Hero.png';
import Mail from "../Mail/Mail";

const Hero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.box}>
                <div className={styles.textContainer}>
                    <div>
                        <h1 className={styles.mainText}>You don't have to</h1>
                        <h1 className={styles.mainText}>Fight them Alone</h1>
                    </div>
                
                    <p className={styles.secondaryText}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                    <Mail />
                </div>
                <div className={styles.imageContainer}>
                    <img src={HeroImage} alt="Hero" />
                </div>
            </div>
        </div>
    );
}

export default Hero;