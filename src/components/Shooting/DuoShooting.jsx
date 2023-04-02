import React from 'react';
import '../../styles/shooting.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const DuoShooting = () => {

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

    console.log(images);
    console.log(images[2]);

    return (
        <section className='shooting-container'>
            <h3>{titre[2]}</h3>
            <div className="images-container">
                {
                    images[2].map(image => (
                        <GatsbyImage image={image.gatsbyImageData}  alt="photos de couple" />
                    ))
                }
            </div>
        </section>
    )
}
