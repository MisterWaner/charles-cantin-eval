import React from 'react';
import '../../styles/shooting.css';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const EventShooting = () => {

    const data = useStaticQuery(graphql`
    query shooting {
        allStrapiShooting {
            edges {
                node {
                    titre
                    strapi_id
                    images {
                        localFile {
                            childrenImageSharp {
                                gatsbyImageData(width: 500, placeholder: BLURRED)
                            }
                        }
                    }
                    id
                }
            }
        }
    }
    `)

    console.log(data);

    const titre = data.allStrapiShooting.edges.map(({ node }) => {
        return node.titre
    })

    console.log(titre);

    const images = data.allStrapiShooting.edges.map(({ node }) => {
        return node.images
    })
    console.log(images);
    console.log(images[0][0]);

    return (
        <section className='shooting-container'>
            <h3>{titre[0]}</h3>
            <div className="images-container">
                {
                    images[0].map(image => (
                        <GatsbyImage image={image.localFile.childrenImageSharp[0].gatsbyImageData} alt="baptême et mariage" />
                    ))
                }
            </div>
        </section>
    )
}
