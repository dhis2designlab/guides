import React, { useState, useEffect } from 'react'
import { arrayOf, shape, func, string } from 'prop-types'
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

export const Branch = ({ heading, pathname, subheadings, onLink }) => {
    const active = pathname.startsWith(heading.path)
    const hasChildren = subheadings.length > 0
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (active !== expanded) toggleExpanded()
    }, [pathname])

    const toggleExpanded = () => setExpanded(!expanded)

    return (
        <Container active={active}>
            <NavItem
                path={heading.path}
                label={heading.label}
                expanded={expanded}
                onExpand={toggleExpanded}
                showButton={hasChildren}
                onLink={onLink}
            />
            {subheadings && expanded && (
                <NavItems headings={subheadings} onLink={onLink} />
            )}
        </Container>
    )
}

Branch.propTypes = {
    heading: shape({
        path: string.isRequired,
        label: string.isRequired,
    }).isRequired,
    pathname: string.isRequired,
    subheadings: arrayOf(
        shape({
            path: string.isRequired,
            label: string.isRequired,
        })
    ),
    onLink: func.isRequired,
}
