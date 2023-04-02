import React from 'react';
import { graphql } from 'gatsby';
import { Navbar } from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';
import * as styles from '../styles/pricing.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

//Pricing page

const pricing = ({ data }) => {

    console.log(data);

    return (

        <>
            <Navbar />
            <Layout>
                <div className={styles.pricing}>
                    <h1>Tarifs et Prestations</h1>
                    <div className={styles.cardContainer}>
                        {/* Map through datas to display list of cards for prices & prestations */}
                        {data.allContentfulPrestation.edges.map(( {node}, i) => (
                            <div className={styles.card} key={i}>
                                <div className={styles.cardHeader}>
                                    <h3>{node.label}</h3>
                                </div>
                                <div className={styles.cardBody}>
                                    <GatsbyImage 
                                    image={node.image.gatsbyImageData} 
                                    alt="" 
                                    className={styles.cardImage} />
                                    <p className={styles.cardText}>
                                        {node.description}
                                    </p>
                                </div>
                                <div className={styles.cardFooter}>
                                    <p>Prix: {node.price}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                    
            </Layout>
        </>

    )
}

//Query graphql that fetch data from api
export const query = graphql`
    query Card {
        allContentfulPrestation {
            edges {
                node {
                    id
                    price
                    description
                    label
                    image {
                        gatsbyImageData(width: 300)
                    }       
                }
            }
        }
    }
`

export default pricing;
