import React from "react";
import styles from './HomePage.module.css';
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Introduction/Intro";
import Section from "../components/Section/Section";
import { CHOOSE_US_DETAILS , PRACTICES, TEAM_DETAILS, TESTIMONIALS, QUESTIONS} from "../mockData";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm";
import Footer from "../components/Footer/Footer";
import FAQComponent from "../components/FAQ/FAQ";

export const intro_props = {
    heading: "Criminal Lawyer",
    subHeading: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation."
};

const HomePage = () => {
    
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Hero />
            <Intro data={intro_props} />
            <Section type='vertical' data={CHOOSE_US_DETAILS} />
            <ImageGrid data={PRACTICES} />
            <Section type='carousel' data={TESTIMONIALS} />
            <Section type='horizontal' data={TEAM_DETAILS} />
            <FAQComponent data={QUESTIONS} />
            <SubscriptionForm />
            <Footer />
        </div>
    )
}

export default HomePage;