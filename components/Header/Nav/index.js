import React from 'react';
import HeaderNavItems from '../HeaderNavItems';
import NavItem from '../NavItem';
import Link from 'next/link';

const Nav = ({ setMobileNavStatus }) => {
    const hideMobileNav = () => {
        setMobileNavStatus(false);
    }

    return (
        <nav className="header-nav">
            <ul className="nav-items">
                <li className="nav-item nav-item-mobile">
                    <Link href="/client-resources">
                        <a className="nav-item-link weight-700" onClick={hideMobileNav}>
                            <span>Create</span>
                        </a>
                    </Link>
                </li>
                {
                    HeaderNavItems.map(({ title, link, subnav }, index) => {
                        return (
                            <NavItem title={title} link={link} subnav={subnav} hideMobileNav={hideMobileNav} key={`nav-item-${index}`} />
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;