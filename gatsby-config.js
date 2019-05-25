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
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'DHIS2 Design Lab',
                short_name: 'DHIS2 Design Lab',
                start_url: '/',
                background_color: '#ebebeb',
                theme_color: '#215e8c',
                display: 'minimal-ui',
                icon: 'src/images/dhis2.png',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-vscode',
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
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
    ],
}
