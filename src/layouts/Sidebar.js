import React, { useState, useContext, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import * as colors from '../constants/colors'
import { menu, close } from '../constants/icons'
import { Navigator } from '../components/Navigator'
import { NarrowContext, toPath } from '../utils'
import { SidebarButton } from './SidebarButton'

const StyledAside = styled.aside`
    position: fixed;
    height: calc(100vh - 56px);
    background: white;
    border-right: 1px solid ${colors.border};
    width: 18rem;
    z-index: 100;
    overflow-y: auto;
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

export const Sidebar = ({ path, hash }) => {
    const data = useStaticQuery(query)
    const narrow = useContext(NarrowContext)
    const [hide, setHide] = useState(true)

    const icon = hide ? menu : close
    const pages = data.allMarkdownRemark.edges.map(({ node }) => toPage(node))

    useEffect(() => {
        if (narrow) setHide(true)
    }, [path, hash])

    const toggleHide = () => setHide(!hide)

    return (
        <>
            {(!narrow || !hide) && (
                <StyledAside>
                    <Navigator pages={pages} path={path} />
                </StyledAside>
            )}
            {narrow && <SidebarButton onClick={toggleHide} icon={icon} />}
        </>
    )
}
