/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": "F3DW4zwzjDZuq8AyjQHxtp3AW5IpGcH41fQUJOeFiC0",
                "spaceId": "h4el0ml37q89"
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp", 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        `gatsby-plugin-netlify`
    ]
};