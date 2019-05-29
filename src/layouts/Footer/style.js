import styled from 'styled-components'

export const Container = styled.footer`
    background-color: #1e1e1e;
    color: white;
    width: 100%;
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
    &:hover {
        background-color: #3182ce;
        border-radius: 4px;
    }
`
