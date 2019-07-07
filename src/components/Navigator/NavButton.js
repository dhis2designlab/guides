import React from 'react'
import styled, { css } from 'styled-components'

const StyledSvg = styled.svg`
    transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    ${({ expanded }) => {
        if (expanded)
            return css`
                transform: rotate(-90deg);
            `
    }}
`

const StyledButton = styled.button`
    background: none;
    border: none;
    outline: unset;
    cursor: pointer;
    &:hover,
    &:focus {
        background-color: rgb(243, 245, 247);
    }
`

const NavIcon = ({ expanded }) => (
    <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        expanded={expanded}
    >
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </StyledSvg>
)

export const NavButton = ({ expanded, onClick }) => (
    <StyledButton onClick={onClick}>
        <NavIcon expanded={expanded} />
    </StyledButton>
)
