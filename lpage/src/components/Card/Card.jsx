import React from "react";
import styles from './Card.module.css';
import { RoundButton } from "../Button/Button";

const Card = ({data, type}) => {
    const {card_details} = data;
    switch(type) {
        case 'horizontal':
            return (
                <div className={styles.cardContainer}>
                    {
                        card_details.map((card) => {
                            return (
                                <div className={styles.horizontalCard} key={card['id']}>
                                    <div className={styles.imageContainer}>
                                        <img src={card['image']} alt="" />
                                    </div>
                                    <div className={styles.details}>
                                        <h4 className={styles.primaryHeading}>{card['name']}</h4>
                                        <p className={styles.content}>{card['no_of_cases']} Cases</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            );
        case 'vertical':
            return (
                <div className={styles.cardContainer}>
                    {
                        card_details.map((card) => {
                            return (
                                <div className={styles.card} key={card.id}>
                                    <div className={styles.imageContainer}>
                                        <img src={card['image']} alt='' />
                                    </div>
                                    <h4 className={styles.primaryHeading}>
                                        {
                                            `${card['success_rate']} Success Rate`
                                        }
                                    </h4>
                                    <p className={styles.content}>{card['content']}</p>
                                    
                                        <RoundButton>Read More</RoundButton>
                                </div>
                            );
                        })
                    }
                </div>
            );
        default:
            return <></>;
    }
}

export default Card;