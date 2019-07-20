import styled from 'styled-components'
import { Link } from 'gatsby'
import * as colors from '../../constants/colors'

export const Container = styled.nav`
    display: grid;
    column-width: 330px;
    grid-template-columns: repeat(auto-fit, 330px);
    column-gap: 24px;
    row-gap: 24px;
    padding: 24px;
    justify-content: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    outline: unset;
    box-shadow: 0 0 1px 0 ${colors.shadow}, 0 3px 8px -2px ${colors.shadowDark};
    div {
        transition: 300ms;
    }
    &:hover,
    &:focus {
        box-shadow: 0 0 1px 0 ${colors.shadowDark},
            0 8px 18px -4px ${colors.shadowLight};
    }
`

export const Content = styled.article`
    padding: 0 32px;
`

export const Title = styled.h2`
    color: ${colors.text};
    font-size: 1.2rem;
    font-weight: 410;
    margin-block-start: 1.75rem;
    margin-block-end: 1.5rem;
`

export const Description = styled.p`
    color: ${colors.text};
    margin-block-end: 3em;
`
