import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./Header.module.scss";

const HeaderNoNav = () => {
    // mobile nav
    const [mobileNavStatus, setMobileNavStatus] = useState(false);

    const toggleMobileNav = () => {
        mobileNavStatus ? setMobileNavStatus(false) : setMobileNavStatus(true);
    }

    return (
        <header className={`${styles.header} ${mobileNavStatus ? styles.mbl_nav_open : ""}`} id="site-header">
            <div className={`${styles.header_container} container`}>
                <Link href="/">
                    <a className={`${styles.logo_container}`}>
                        <img src="/logo/logo-header.png" alt="Renovating Health Logo" className={`${styles.logo}`} />
                    </a>
                </Link>
                <nav className={`${styles.nav}`}>
                    <ul className={`${styles.nav_items}`}>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/about">
                                <a className={`${styles.nav_item_link} size-p-s weight-500`}>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/products">
                                <a className={`${styles.nav_item_link} size-p-s weight-500`}>
                                    Products
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/work-with-us">
                                <a className={`${styles.nav_item_link} size-p-s weight-500`}>
                                    Work With Us
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/learn">
                                <a className={`${styles.nav_item_link} size-p-s weight-500`}>
                                    Learn
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/blog">
                                <a className={`${styles.nav_item_link} size-p-s weight-500`}>
                                    Blog
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <button className={`${styles.cta_btn}`}>
                        <Link href="/">
                            <a className={`${styles.cta_btn_link} size-p-m weight-800`}>
                                CREATE
                            </a>
                        </Link>
                    </button>
                    <button className={`${styles.nav_mobile_btn}`} onClick={toggleMobileNav}>
                        <div className={`${styles.nav_mobile_btn_bars}`}>
                            <div className={`${styles.nav_mobile_btn_bar} ${styles.top}`}></div>
                            <div className={`${styles.nav_mobile_btn_bar} ${styles.bottom}`}></div>
                        </div>
                    </button>
                </nav>
            </div>
        </header >
    );
}

export default HeaderNoNav;