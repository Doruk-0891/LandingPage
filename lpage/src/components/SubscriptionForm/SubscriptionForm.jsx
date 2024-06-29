import React from "react";
import styles from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.header}>Subscribe Our Newsletter</h2>
                <div className={styles.formInput}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Enter your email" />
                    <button className={styles.sendBtn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionForm;