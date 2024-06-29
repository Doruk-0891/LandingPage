import React from "react";
import styles from './ImageGrid.module.css';

const ImageGrid = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>{data['title']}</h2>
            <div className={styles.container}>
            {
                data['card_details'].map((card) => {
                    return (
                        <div className={styles.card}>
                            <img src={card.image} alt="" />
                            <p className={styles.title}>{card.title}</p>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default ImageGrid;