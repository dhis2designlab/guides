import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import * as colors from '../constants/colors'
import { Navigator } from '../components/Navigator'
import { toPath } from '../utils/toPath'

const StyledAside = styled.aside`
    position: fixed;
    height: calc(100vh - 56px);
    background: white;
    border-right: 1px solid ${colors.border};
    width: 18rem;
`

const query = graphql`
    query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___index] }) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                    }
                    headings(depth: h2) {
                        value
                    }
                }
            }
        }
    }
`

const toPage = node => {
    const path = `/${toPath(node.frontmatter.path)}`

    return {
        heading: {
            label: node.frontmatter.title,
            path,
        },
        subheadings: node.headings.map(({ value }) => ({
            label: value,
            path: `${path}#${toPath(value)}`,
        })),
    }
}

export const Sidebar = () => {
    const data = useStaticQuery(query)

    const pages = data.allMarkdownRemark.edges.map(({ node }) => toPage(node))

    return (
        <StyledAside>
            <Navigator pages={pages} />
        </StyledAside>
    )
}
