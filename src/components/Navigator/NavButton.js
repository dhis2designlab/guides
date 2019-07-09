import React from 'react'
import styled, { css } from 'styled-components'
import * as colors from '../../constants/colors'
import { Icon } from '../Icon'
import { keyboard_arrow_right } from '../../constants/icons'

const StyledIcon = styled(Icon)`
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
    padding-left: 12px;
    padding-right: 12px;
    &:hover,
    &:focus {
        background-color: ${colors.focus};
    }
    &:active {
        background-color: ${colors.active};
    }
`

const NavIcon = ({ expanded }) => (
    <StyledIcon expanded={expanded} color="black" icon={keyboard_arrow_right} />
)

export const NavButton = ({ expanded, onClick }) => (
    <StyledButton onClick={onClick}>
        <NavIcon expanded={expanded} />
    </StyledButton>
)
