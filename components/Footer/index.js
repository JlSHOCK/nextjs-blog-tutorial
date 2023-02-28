import React from 'react';
import Socials from '../Socials';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer" id="site-footer">
            <div className="footer-container container">
                <ul className="footer-legal-items">
                    <li className="footer-legal-item weight-500">
                        <Link href="/">
                            <a className="footer-legal-link">
                                Disclaimer
                            </a>
                        </Link>
                    </li>
                    <span className="spacer">|</span>
                    <li className="footer-legal-item footer-copyright weight-700">
                        © {new Date().getFullYear()}
                        <Link href="/">
                            <a className="footer-legal-link">
                                Renovating Health
                            </a>
                        </Link>
                    </li>
                </ul>
                <Socials />
            </div>
        </footer>
    );
}

export default Footer;