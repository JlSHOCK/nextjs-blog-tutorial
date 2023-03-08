import React from 'react';
import styles from './signup.module.scss';
import { attributes as SignupContent } from '../../content/signup.md';

const SignUp = () => {
    return (
        <section className={`${styles.signup}`}>
            <div className={`${styles.signup_container} container`}>
                <div className={`${styles.signup_content}`}>
                    <h3 className={`${styles.title} size-h-l weight-600`}>
                        {SignupContent.title ? SignupContent.title : "Join the Renovating Health Community"}
                    </h3>
                    {
                        SignupContent.bullets &&
                        <ul className={`${styles.signup_bullets}`}>
                            {
                                SignupContent.bullets.map((bullet, index) => {
                                    return (
                                        <li className={`${styles.signup_bullet} size-p-s weight-400`} key={`bullet-${index}`}>
                                            {index + 1}. {bullet.bullet}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    }
                </div>
                <div className={`${styles.signup_form_container}`}>

                </div>
            </div>
        </section >
    );
}

export default SignUp;