import React from "react";
import styles from './CarouselCard.module.css';

const CarouselCard = ({data}) => {
    const {image, destination, name, id, content} = data;
    return (
        <div className={styles.card} key={id}>
                                    <div className={styles.imageContainer}>
                                        <img src={image} alt='' />
                                    </div>
                                    <h4 className={styles.primaryHeading}>
                                        {
                                            name
                                        }
                                    </h4>
                                    <h5>
                                        {destination}
                                    </h5>
                                    <p className={styles.content}>{content}</p>
                                </div>
    );
}

export default CarouselCard;