import React from 'react';
import Link from 'next/link';
import getWindowWidth from '../../Utils/getWindowWidth.js';

const Subnav = ({ subnav, setIsActive, hideMobileNav }) => {
    const _onClick = () => {
        let windowWidth = getWindowWidth();

        if (windowWidth < 900) {
            setIsActive(false);
            hideMobileNav();
        }
    }

    return (
        <div className={`subnav`}>
            {
                subnav.subnavItems &&
                <ul className="subnav-items">
                    {
                        subnav.subnavItems.map(({ title, link }, i) => {
                            return (
                                <li className={`subnav-item item-${i + 1}`} key={`subnav-item-${i}`}>
                                    <Link href={link}>
                                        <a className="subnav-item-link size-p-s weight-500" onClick={_onClick}>
                                            <span className="subnav-item-title size-p-s weight-500">{title}</span>
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