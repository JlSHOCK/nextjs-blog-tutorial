import React from 'react';
import Button from '../../../Button';
import styles from './home-hero.module.scss';
import { attributes as HomeContent } from '../../../../content/home.md';

const HomeHero = () => {
    return (
        <section className={`${styles.hero}`}>
            <img src={HomeContent.heroImage ? HomeContent.heroImage : "/images/test.jpg"} className={`${styles.hero_bg_img}`} />
            <div className={`${styles.container} container`}>
                <h1 className={`${styles.title} size-h-xxl weight-600`}>
                    {HomeContent ? HomeContent.title : "Hello World"}
                </h1>
                {
                    HomeContent.bullets &&
                    <ul className={`${styles.bullets}`}>
                        {
                            HomeContent.bullets.map((bullet, index) => {
                                return (
                                    <li className={`${styles.bullet} size-p-l weight-500`} key={`bullet-${index}`}>
                                        • {bullet.bullet}
                                    </li>
                                );
                            })
                        }
                    </ul>
                }
                {
                    HomeContent.buttons &&
                    <div className={`${styles.cta_btns}`}>
                        {
                            HomeContent.buttons.map((button, index) => {
                                return (
                                    <Button link={button.ctaLink} cta={button.ctaTitle} arrow={true} btnClass={`${styles.cta_btn}`} btnLinkClass={`${styles.cta_btn_link}`} key={`button - ${index} `} />
                                );
                            })
                        }
                    </div>
                }
            </div>
        </section>
    );
}

export default HomeHero;