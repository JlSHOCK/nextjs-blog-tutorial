import React from 'react';
import Link from 'next/link';

const Button = ({ link, cta, arrow, newWindow, btnClass, btnLinkClass, clickEvent }) => {
    if (clickEvent) {
        return (
            <button className={`${btnClass} cta_btn`} onClick={clickEvent}>
                <span className={`${btnLinkClass} cta_btn_link size-p-m weight-800`}>
                    {cta}
                    {
                        arrow &&
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.847 14.997">
                            <path className="arrow-fill" d="M4259.164,3718.387l7.5-7.5-7.5-7.5-.983.984,5.819,5.819h-12.185v1.391H4264l-5.819,5.819Z" transform="translate(-4251.815 -3703.391)" />
                        </svg>
                    }
                </span>
            </button>
        );
    } else {
        return (
            <button className={`${btnClass} cta_btn`}>
                <Link href={link}>
                    <a className={`${btnLinkClass} cta_btn_link size-p-m weight-800`}
                        target={newWindow ? "_blank" : "_self"}
                        rel={newWindow ? "noopener noreferrer" : ""}>
                        {cta}
                        {
                            arrow &&
                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.847 14.997">
                                <path className="arrow-fill" d="M4259.164,3718.387l7.5-7.5-7.5-7.5-.983.984,5.819,5.819h-12.185v1.391H4264l-5.819,5.819Z" transform="translate(-4251.815 -3703.391)" />
                            </svg>
                        }
                    </a>
                </Link>
            </button>
        );
    }
}

export default Button;