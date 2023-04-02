import React from 'react';

import Layout from '../components/Layout/Layout';
import { Navbar } from '../components/Navbar/Navbar';
import { FormContact } from '../components/Form/Form';
import Phone from '../assets/images/phone-solid.svg';
import At from '../assets/images/at-solid.svg';
import * as styles from '../styles/contact.module.css';

//Contact page

const Contact = () => {


    return (
        <>
            <Navbar />
            <Layout>
                <div className={styles.contact}>
                    <h1>Contactez-moi</h1>
                    <div className={styles.formContainer}>
                        <div className={styles.contactContainer}>
                            <div className={styles.info}>
                                <img src={Phone} alt="logo de téléphone" />
                                <p>01-02-03-04-05</p>
                            </div>
                            <div className={styles.info}>
                                <img src={At} alt="arobase" />
                                <p>contact@charles-cantin.fr</p>
                            </div>
                        </div>
                        <FormContact />
                    </div>

                </div>

            </Layout>
        </>
    )
}

export default Contact;
