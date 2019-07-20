import React from 'react'
import { func, bool, string } from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { NavButton } from './NavButton'
import * as colors from '../../constants/colors'

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
    padding-right: 8px;
    letter-spacing: 1px;
    white-space: nowrap;
    font-size: 0.9rem;
    &:hover,
    &:focus {
        background-color: ${colors.focus};
    }
    &:active {
        background-color: ${colors.active};
    }
`

export const NavItem = ({
    path,
    label,
    showButton,
    expanded,
    onExpand,
    onLink,
}) => (
    <StyledDiv>
        <NavLink onClick={onLink} to={path}>
            {label}
        </NavLink>
        {showButton && <NavButton expanded={expanded} onClick={onExpand} />}
    </StyledDiv>
)

NavItem.propTypes = {
    path: string.isRequired,
    label: string.isRequired,
    showButton: bool,
    expanded: bool,
    onExpand: func,
    onLink: func.isRequired,
}
