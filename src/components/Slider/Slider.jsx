import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';





export const Slider = () => {

    const data = useStaticQuery(graphql`
        query sliderImg {
            allContentfulCaroussel {
                edges {
                    node {
                        id
                        titre
                        image {
                            gatsbyImageData(width: 900, quality: 90, placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    `);

    const images = data.allContentfulCaroussel.edges.map(( { node }) => {
        return node.image.gatsbyImageData
    })

    console.log(images);


    return (
        <Carousel>
            {data.allContentfulCaroussel.edges.map(({ node }) => (
                <Carousel.Item key={ node.id }>
                    <GatsbyImage className='d-block w-100 rounded'  image={node.image.gatsbyImageData} alt={node.titre} />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
