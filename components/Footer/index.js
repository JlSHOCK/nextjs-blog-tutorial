import React, { useState } from 'react';
import Socials from '../Socials';
import Link from 'next/link';
import Popup from "reactjs-popup";
import { attributes as DisclaimerContent } from '../../content/disclaimer.md';

const Footer = () => {
    const [popupStatus, setPopupStatus] = useState(false);

    const openPopup = (e) => {
        e.preventDefault();
        setPopupStatus(true);
    }

    const closePopup = () => {
        setPopupStatus(false);
    }

    return (
        <footer className="footer" id="site-footer">
            <div className="footer-container container">
                <ul className="footer-legal-items">
                    <li className="footer-legal-item weight-500">
                        <Link href="#">
                            <a className="footer-legal-link" onClick={openPopup}>
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
            <Disclaimer popupStatus={popupStatus} closePopup={closePopup} />
        </footer>
    );
}

const Disclaimer = ({ popupStatus, closePopup }) => {
    return (
        <Popup open={popupStatus} closeOnDocumentClick onClose={closePopup} className="popup">
            <button className="close" onClick={closePopup}></button>

            <div className={'disclaimer-popup'}>
                <h6 className={'disclaimer-popup-title size-h-m weight-700'}>
                    {DisclaimerContent ? DisclaimerContent.title : "Disclaimer"}
                </h6>
                <div className={'disclaimer-popup-copy size-p-m weight-400'}>
                    {DisclaimerContent.copy}
                </div>
            </div>
        </Popup>
    );
}

export default Footer;