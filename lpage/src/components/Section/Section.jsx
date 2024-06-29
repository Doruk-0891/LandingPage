import React from "react";
import Card from "../Card/Card";
import styles from './Section.module.css';
import Carousel from "../Carousel/Carousel";

const Section = ({type, data}) => {
    const {title} = data;
    switch(type) {
        case 'carousel':
            return (
                <div className={styles.container} id={styles.carousel}>
                        <h2 className={styles.sectionHeading}>{title}</h2>
                        <Carousel data={data} />
                </div>
            );
        default:
            return (
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>{title}</h2>
                    <Card type={type} data={data} />
                </div>
            );
            
    }
}

export default Section;