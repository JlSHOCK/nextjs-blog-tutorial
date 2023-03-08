import React from 'react';
import styles from './signup.module.scss';

const SignUp = () => {
    return (
        <section className={`${styles.signup}`}>
            <div className={`${styles.signup_container} container`}>
                <div className={`${styles.signup_content}`}>
                    <h3 className={`${styles.title} size-h-l weight-600`}>
                        Join the Renovating Health Community
                    </h3>
                    <ul className={`${styles.signup_bullets}`}>
                        <li className={`${styles.signup_bullet} size-p-s weight-400`}>
                            1. Receive my free guide Nourish Your Womb.
                        </li>
                        <li className={`${styles.signup_bullet} size-p-s weight-400`}>
                            2. Exclusive deals and offers on products.
                        </li>
                        <li className={`${styles.signup_bullet} size-p-s weight-400`}>
                            3. Get access to our online community.
                        </li>
                    </ul>
                </div>
                <div className={`${styles.signup_form_container}`}>

                </div>
            </div>
        </section >
    );
}

export default SignUp;