import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
    // mobile nav
    const [mobileNavStatus, setMobileNavStatus] = useState(false);

    const toggleMobileNav = () => {
        mobileNavStatus ? setMobileNavStatus(false) : setMobileNavStatus(true);
    }

    // header scroll
    const [headerScrolldownClass, setHeaderScrolldownClass] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                setHeaderScrolldownClass("scrolled");
            } else {
                setHeaderScrolldownClass("");
            }
        });
    }, []);

    return (
        <header className={`header ${headerScrolldownClass}`} id="site-header">
            <div className="header-container">
                <div className="header-logo-container">
                    <div className="header-logo">
                        <Link href="/">
                            <a className="header-logo-link">
                                <img src="/logo/logo-header.png" alt="Renovating Health Logo" className="header-logo-img" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`navigation-container ${mobileNavStatus ? "nav-open" : ""}`}>
                    <Nav setMobileNavStatus={setMobileNavStatus} />
                    <button className="cta_btn">
                        <Link href="/">
                            <a className="cta_btn_link size-p-m weight-800">
                                GET STARTED
                            </a>
                        </Link>
                    </button>
                    <button className="nav-mobile-btn" onClick={toggleMobileNav}>
                        <div className="nav-mobile-btn-bars">
                            <div className="nav-mobile-btn-bar top"></div>
                            <div className="nav-mobile-btn-bar bottom"></div>
                        </div>
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Header;