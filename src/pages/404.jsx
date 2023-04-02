import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';


//Not found page error 404

const NotFound = () => {
    return (
        <Layout>
            <h1 className='text-danger'>Page non trouvée !</h1>
            <p className='text-danger fs-2'>Désolé la page que vous cherchez n'existe pas...</p>
            <Link to='/' className='link-danger fs-5'>Retourner à l'accueil</Link>
        </Layout>
        
    )
}

export default NotFound;
