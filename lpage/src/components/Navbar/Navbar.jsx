import React from "react";
import styles from './Navbar.module.css';
import Logo from "../Logo/Logo";
import Navigation from "../NavigationList/Navigation";
import Button from "../Button/Button";

const Navbar = () => {
    const navTabs = [
        'Home',
        'Attorneys',
        'Practice Areas',
        'About Us'
    ];
    return <nav className={styles.navbar}>
        <Logo />
        <Navigation tabs={navTabs} />
        <Button>Contact Now</Button>
    </nav>
}

export default Navbar;