import React from 'react';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import LinkedinIcon from './LinkedinIcon';
import InstagramIcon from './InstagramIcon';
import Link from 'next/link';

const Socials = () => {
    const socials = [
        {
            title: "Facebook",
            link: "https://www.facebook.com/GoKantata",
            icon: <FacebookIcon />
        },
        {
            title: "Twitter",
            link: "https://twitter.com/GoKantata",
            icon: <TwitterIcon />
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/company/gokantata/",
            icon: <LinkedinIcon />
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/teamkantata/",
            icon: <InstagramIcon />
        }
    ];

    return (
        <ul className="social-icons">
            {
                socials.map(({ title, link, icon }, index) => {
                    return (
                        <li className="social-icon" key={`social-${index}`} title={title}>
                            <Link href={link}>
                                <a className={`social-icon-link`} target="_blank">
                                    {icon}
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