import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Location } from '@reach/router'
import { NavButton } from './NavButton'
import * as colors from '../../constants/colors'

const Container = styled.div`
    border-bottom: 1px solid ${colors.border};
    border-left: 6px solid white;
    ${({ active }) => {
        if (active)
            return css`
                border-left-color: ${colors.accent};
            `
    }}
`

const StyledDiv = styled.div`
    display: flex;
`

const NavLink = styled(Link)`
    color: unset;
    text-decoration: none;
    outline: none;
    line-height: 3rem;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
    letter-spacing: 1px;
    white-space: nowrap;
    &:hover,
    &:focus {
        background-color: ${colors.focus};
    }
    &:active {
        background-color: ${colors.active};
    }
`

const NavItem = ({ path, label, showButton, expanded, onExpand, onLink }) => (
    <StyledDiv>
        <NavLink onClick={onLink} to={path}>
            {label}
        </NavLink>
        {showButton && <NavButton expanded={expanded} onClick={onExpand} />}
    </StyledDiv>
)

const Nodes = ({ headings, onLink }) => (
    <>
        {headings.map(({ path, label }) => (
            <NavItem key={path} path={path} label={label} onLink={onLink} />
        ))}
    </>
)

const TreeNodes = ({ heading, pathname, subheadings, onLink }) => {
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
                <Nodes headings={subheadings} onLink={onLink} />
            )}
        </Container>
    )
}
export const Tree = ({ heading, subheadings, onLink }) => (
    <Location>
        {({ location }) => (
            <TreeNodes
                heading={heading}
                pathname={location.pathname}
                subheadings={subheadings}
                onLink={onLink}
            />
        )}
    </Location>
)
