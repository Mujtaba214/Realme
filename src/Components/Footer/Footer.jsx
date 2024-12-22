// Footer.js
import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footercontent}>
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <ul className={styles.footerlinks}>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
