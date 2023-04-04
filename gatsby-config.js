/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Charles-Cantin Photographe`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": "F3DW4zwzjDZuq8AyjQHxtp3AW5IpGcH41fQUJOeFiC0",
                "spaceId": "h4el0ml37q89"
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "images",
                path: "./src/assets/images/"
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `./src/pages`
            },
        },
        `gatsby-plugin-netlify`,
    ],
    flags: {
        DEV_SSR: true
    }
};