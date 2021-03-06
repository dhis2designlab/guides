'use strict'

module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: '#43cbcb',
                showSpinner: false,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'DHIS2 Design Lab',
                short_name: 'DHIS2 Design Lab',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#393d4d',
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
                        options: {
                            extensions: [
                                {
                                    identifier:
                                        'jpoissonnier.vscode-styled-components',
                                    version: '0.0.26',
                                },
                            ],
                        },
                    },
                    {
                        resolve: 'gatsby-remark-autolink-headers',
                        options: {
                            offsetY: '80',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 776,
                            quality: 100,
                        },
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
        'gatsby-plugin-layout',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
    ],
}
