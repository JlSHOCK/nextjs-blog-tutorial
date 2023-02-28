import React from 'react';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import LinkedinIcon from './LinkedinIcon';
import InstagramIcon from './InstagramIcon';
import YouTubeIcon from './YouTubeIcon';
import Link from 'next/link';
import { attributes as ContactContent } from '../../content/contact.md';

const Socials = () => {
    let { socials } = ContactContent;

    const switchIcon = (param) => {
        switch (param) {
            case 'Facebook':
                return <FacebookIcon />;
            case 'Twitter':
                return <TwitterIcon />;
            case 'LinkedIn':
                return <LinkedinIcon />;
            case 'Instagram':
                return <InstagramIcon />;
            case 'YouTube':
                return <YouTubeIcon />;
            default:
                return null;
        }
    }

    return (
        <ul className="social-icons">
            {
                socials.map(({ platform, link }, index) => {
                    return (
                        <li className="social-icon" key={`social-${index}`} title={platform}>
                            <Link href={link}>
                                <a className={`social-icon-link`} target="_blank">
                                    {switchIcon(platform)}
                                </a>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Socials;