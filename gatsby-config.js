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
                "path": "./src/assets/images/"
            },
            __key: "images"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `./src/pages`
            },
          },
        `gatsby-plugin-netlify`
    ]
};