import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Logo } from './Logo'

export const StyledLink = styled(Link)`
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    align-content: center;
    margin-block-start: 0;
    margin-block-end: 0;
`

export const Title = () => (
    <StyledLink title="Home" to="/">
        <Logo />
        <span>DHIS2 Design Lab</span>
    </StyledLink>
)
