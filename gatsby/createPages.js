'use strict'

const { resolve } = require('path')

module.exports = async ({ actions, graphql }) => {
    const { createPage } = actions

    const template = resolve('./src/templates/guide.js')

    const allMarkdown = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }
    `)

    if (allMarkdown.errors) {
        console.error(allMarkdown.errors)
        throw Error(allMarkdown.errors)
    }

    allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) =>
        createPage({
            path: node.frontmatter.path,
            component: template,
            context: {
                slug: node.fields.slug,
            },
        })
    )
}
