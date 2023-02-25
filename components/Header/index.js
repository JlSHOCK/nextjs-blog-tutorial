import React from 'react';
import Link from 'next/link';
import styles from "./Header.module.scss";

const HeaderNoNav = () => {
    return (
        <header className={`${styles.header}`} id="site-header">
            <div className={`${styles.header_container} container`}>
                <div className={`${styles.logo_container}`}>
                    <Link href="/">
                        <a className={`${styles.logo_link}`}>
                            <img src="/logo/logo.png" alt="Renovating Health Logo" className={`${styles.logo}`} />
                        </a>
                    </Link>
                </div>
                <nav className={`${styles.nav}`}>
                    <ul className={`${styles.nav_items}`}>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/about">
                                <a className={`${styles.nav_item_link} size-p-m weight-500`}>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/products">
                                <a className={`${styles.nav_item_link} size-p-m weight-500`}>
                                    Products
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/work-with-us">
                                <a className={`${styles.nav_item_link} size-p-m weight-500`}>
                                    Work With Us
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/learn">
                                <a className={`${styles.nav_item_link} size-p-m weight-500`}>
                                    Learn
                                </a>
                            </Link>
                        </li>
                        <li className={`${styles.nav_item}`}>
                            <Link href="/blog">
                                <a className={`${styles.nav_item_link} size-p-m weight-500`}>
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
                </nav>
            </div>
        </header >
    );
}

export default HeaderNoNav;