import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { NavButton } from './NavButton'

const Container = styled.div`
    border-bottom: 1px solid #00000026;
`

const StyledDiv = styled.div`
    display: flex;
`

const NavLink = styled(Link)`
    color: unset;
    text-decoration: none;
    line-height: 3rem;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
    letter-spacing: 1px;
    white-space: nowrap;
    &:hover,
    &:focus {
        background-color: rgb(243, 245, 247);
    }
`

const StyledSvg = styled.svg`
    stroke: #215e8c;
    stroke-width: 2;
`

const Nodes = ({ headings }) => (
    <>
        {headings.map(({ path, label }) => (
            <NavItem key={path} path={path} label={label} />
        ))}
    </>
)

const NavItem = ({ path, label, parent, expanded, onClick }) => (
    <StyledDiv>
        <NavLink to={path}>{label}</NavLink>
        {parent && <NavButton expanded={expanded} onClick={onClick} />}
    </StyledDiv>
)

export const Tree = ({ heading, subheadings }) => {
    const [expanded, setExpanded] = useState(false)

    const onClick = () => setExpanded(!expanded)

    return (
        <Container>
            <NavItem
                path={heading.path}
                label={heading.label}
                expanded={expanded}
                onClick={onClick}
                parent={subheadings.length > 0}
            />
            {subheadings && expanded && <Nodes headings={subheadings} />}
        </Container>
    )
}
