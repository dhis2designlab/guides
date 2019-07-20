import React, { useState, useEffect } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import styled, { css } from 'styled-components'
import { NavItem } from './NavItem'
import { NavItems } from './NavItems'
import * as colors from '../../constants/colors'

const Container = styled.div`
    border-bottom: 1px solid ${colors.border};
    border-left: 6px solid white;
    ${({ active }) => {
        if (active)
            return css`
                border-left-color: ${colors.accentAlt};
            `
    }}
`

export const Branch = ({ heading, path, subheadings }) => {
    const active = path.startsWith(heading.path)
    const hasChildren = subheadings.length > 0
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (active !== expanded) toggleExpanded()
    }, [path])

    const toggleExpanded = () => setExpanded(!expanded)

    return (
        <Container active={active}>
            <NavItem
                path={heading.path}
                label={heading.label}
                expanded={expanded}
                onExpand={toggleExpanded}
                showButton={hasChildren}
            />
            {subheadings && expanded && <NavItems headings={subheadings} />}
        </Container>
    )
}

Branch.propTypes = {
    heading: shape({
        path: string.isRequired,
        label: string.isRequired,
    }).isRequired,
    path: string.isRequired,
    subheadings: arrayOf(
        shape({
            path: string.isRequired,
            label: string.isRequired,
        })
    ),
}
