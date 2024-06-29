import React from "react";
import styles from './FAQ.module.css';
import AccordionComponent from "../Accordion/Accordion";

const FAQComponent = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.header}>FAQ</h2>
            <div className={styles.container}>
                <div>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. 
                    </p>
                </div>
                <div>
                    <AccordionComponent data={data} />
                </div>
            </div>
        </div>
    );
}

export default FAQComponent;