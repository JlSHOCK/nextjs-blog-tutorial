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
                            <Link href="/blog">
                                <a className={`${styles.nav_item_link} size-p-l`}>
                                    Blog
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <button className={`${styles.cta_btn}`}>
                        <Link href="/">
                            <a className={`${styles.cta_btn_link} size-p-s`}>
                                CTA BUTTON
                            </a>
                        </Link>
                    </button>
                </nav>
            </div>
        </header >
    );
}

export default HeaderNoNav;