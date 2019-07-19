'use strict'

module.exports = {
    plugins: [
        'gatsby-plugin-styled-components',
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
                    'gatsby-remark-vscode',
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
