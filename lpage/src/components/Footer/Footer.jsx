import React from "react";
import styles from './Footer.module.css';
import Logo from "../Logo/Logo";
import Navigation from "../NavigationList/Navigation";
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Pinterest from '../../assets/pinterest.png';
import Twitter from '../../assets/twitter.png';

export const navTabs = [
    'Home',
    'Attorneys',
    'Practice Areas',
    'About Us'
];

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerStrip}>
                <Logo />
                <Navigation tabs={navTabs} />
                <div className={styles.socialLinks}>
                    <img src={Instagram} alt="" width={24} />
                    <img src={Facebook} alt="" width={24} />
                    <img src={Twitter} alt="" width={24} />
                    <img src={Pinterest} alt="" width={24} />
                </div>
            </div>
            <div className={styles.footerStrip}>
                <div className={styles.footerLinks}>
                    <span>© 2020 Acme. All right reserved.</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;