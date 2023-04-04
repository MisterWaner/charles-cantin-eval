import React from 'react';
import { Header } from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';


//thanks page when form is correctly submit
const thanks = () => {
    return (
        <>
            <Header />
            <Layout>
                <h1>Merci</h1>
                <p className='text-black fs-4'>Votre message a été correctement envoyé !</p>
            </Layout>
        </>
    )
}

export default thanks