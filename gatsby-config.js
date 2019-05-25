/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        'gatsby-plugin-styled-jsx',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-vscode`,
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/pages`,
                name: 'pages',
            },
        },
    ],
}
