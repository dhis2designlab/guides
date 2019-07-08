import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import * as colors from '../../constants/colors'

const Nav = styled.nav`
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
`

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    padding: 0 11px;
    line-height: 2rem;
    &:hover,
    &:focus {
        outline: unset;
        background-color: ${colors.blueLight};
        border-radius: 4px;
    }
`

const links = [
    {
        title: 'DEVELOPMENT',
        url: '/',
        tooltip: 'Development guides',
    },
    {
        title: 'ABOUT',
        url: '/about',
        tooltip: 'About this website',
    },
]

export const Pages = () => (
    <Nav>
        {links.map(link => (
            <NavLink key={link.url} title={link.tooltip} to={link.url}>
                {link.title}
            </NavLink>
        ))}
    </Nav>
)
