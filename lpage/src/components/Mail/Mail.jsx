import React from "react";
import MailIcon from '../../assets/Mail/Hicon/Bold/Vector.png';
import { RoundButton } from "../Button/Button";
import styles from './Mail.module.css';

const Mail = ({userMail, setUserMail}) => {
    return (
        <div className={styles.mailContainer}>
            <img src={MailIcon} alt="" />
            <input type="mail" placeholder="Enter your email address" />
            <RoundButton>Let's Talk</RoundButton>
        </div>
    );
}

export default Mail;