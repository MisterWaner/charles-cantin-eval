import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';





export const Slider = () => {

    const data = useStaticQuery(graphql`
        query sliderImg {
            allFile(filter: {relativeDirectory: {eq: "slider"}}, sort: {base: ASC}) {
                edges {
                    node {
                        id
                        base
                        childImageSharp {
                            gatsbyImageData(
                                width: 900
                            )
                        }
                    }
                }
            }
        }
    `);


    return (
        <Carousel>
            {data.allFile.edges.map(({ node }) => (
                <Carousel.Item key={ node.id }>
                    <GatsbyImage className='d-block w-100 rounded'  image={node.childImageSharp.gatsbyImageData} alt={node.base} />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}
