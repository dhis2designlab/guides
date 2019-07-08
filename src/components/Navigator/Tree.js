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

const Nodes = ({ headings }) => (
    <>
        {headings.map(({ path, label }) => (
            <NavItem key={path} path={path} label={label} />
        ))}
    </>
)

const NavItem = ({ path, label, showButton, expanded, onClick }) => (
    <StyledDiv>
        <NavLink to={path}>{label}</NavLink>
        {showButton && <NavButton expanded={expanded} onClick={onClick} />}
    </StyledDiv>
)

const TreeNodes = ({ heading, pathname, subheadings }) => {
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
                onClick={toggleExpanded}
                showButton={hasChildren}
            />
            {subheadings && expanded && <Nodes headings={subheadings} />}
        </Container>
    )
}
export const Tree = ({ heading, subheadings }) => (
    <Location>
        {({ location }) => (
            <TreeNodes
                heading={heading}
                pathname={location.pathname}
                subheadings={subheadings}
            />
        )}
    </Location>
)