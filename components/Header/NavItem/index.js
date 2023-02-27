import React, { useState, useEffect } from 'react';
import NavDownArrow from '../NavDownArrow';
import Subnav from '../Subnav';
import Link from 'next/link';
import getWindowWidth from '../../Utils/getWindowWidth.js';
import { useRouter } from 'next/router';

const Nav = ({ title, link, subnav, hideMobileNav }) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const _onClick = (e) => {
        e.preventDefault();
        let windowWidth = getWindowWidth();

        if (windowWidth >= 900) {
            router.push(link);
            setIsActive(false);
        } else {
            if (subnav && !isActive) {
                setIsActive(true);
            } else {
                router.push(link);
                hideMobileNav();
            }
        }
    }

    const _onMouseEnter = () => {
        let windowWidth = getWindowWidth();
        windowWidth >= 900 && setIsActive(true);
    }

    const _onMouseLeave = () => {
        let windowWidth = getWindowWidth();
        windowWidth >= 900 && setIsActive(false);
    }

    const toggleMobileNavItem = () => {
        isActive ? setIsActive(false) : setIsActive(true);
    }

    return (
        <li className={`nav-item ${isActive ? "active" : ""}`} onMouseEnter={subnav && _onMouseEnter} onMouseLeave={_onMouseLeave}>
            <Link href={link}>
                <a className="nav-item-link size-p-s weight-500" onClick={_onClick}>
                    <span>{title}</span>
                    {subnav && <NavDownArrow />}
                </a>
            </Link>
            <span className="nav-item-close" onClick={toggleMobileNavItem}></span>
            {
                subnav &&
                <Subnav navItemTitle={title.toLowerCase().replace(" ", "-")} subnav={subnav} setIsActive={setIsActive} hideMobileNav={hideMobileNav} />
            }
        </li>
    );
}

export default Nav;