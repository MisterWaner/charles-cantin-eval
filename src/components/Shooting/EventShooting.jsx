import React from 'react';
import '../../styles/shooting.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const EventShooting = () => {

    const data = useStaticQuery(graphql`
    query shooting {
        allContentfulShooting {
            edges {
                node {
                    contentful_id
                    titre
                    images {
                        gatsbyImageData(placeholder: BLURRED, width: 500)
                    }
                } 
            }
        }
    }
    `)



    console.log(data);

    const titre = data.allContentfulShooting.edges.map(({ node }) => {
        return node.titre
    })

    console.log(titre);

    const images = data.allContentfulShooting.edges.map(({ node }) => {
        return node.images
    })

    console.log(data);

    console.log(images);
    console.log(images[0]);

    return (
        <section className='shooting-container'>
            <h3>{titre[0]}</h3>
            <div className="images-container">
                {
                    images[0].map(image => (
                        <GatsbyImage image={image.gatsbyImageData} alt="baptême et mariage" />
                    ))
                }
            </div>
        </section>
    )
}
