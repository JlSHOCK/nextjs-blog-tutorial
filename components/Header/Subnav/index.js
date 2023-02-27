import React from 'react';
import Link from 'next/link';
import getWindowWidth from '../../Utils/getWindowWidth.js';

const Subnav = ({ navItemTitle, subnav, setIsActive, hideMobileNav }) => {
    const _onClick = () => {
        let windowWidth = getWindowWidth();

        if (windowWidth < 900) {
            setIsActive(false);
            hideMobileNav();
        }
    }

    return (
        <div className={`subnav ${navItemTitle && `subnav-${navItemTitle}`}`}>
            {
                subnav.subnavItems &&
                <ul className="subnav-items">
                    {
                        subnav.subnavItems.map(({ title, copy, link }, i) => {
                            return (
                                <li className={`subnav-item item-${i + 1}`} key={`subnav-item-${i}`}>
                                    <Link href={link}>
                                        <a className="subnav-item-link weight-900" onClick={_onClick}>
                                            <span className="subnav-item-title">{title}</span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            }
        </div >
    );
}

export default Subnav;