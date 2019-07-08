import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.footer`
    background-color: ${colors.dark};
    color: white;
    width: 100%;
    z-index: 1;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    max-width: 816px;
    padding: 16px;
    margin-right: auto;
    margin-left: auto;
`

export const NavLink = styled.a`
    color: white;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    padding: 6px 11px;
    &:hover,
    &:focus {
        outline: unset;
        background-color: ${colors.blueLight};
        border-radius: 4px;
    }
`
