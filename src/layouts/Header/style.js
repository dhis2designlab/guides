import { Link } from 'gatsby'
import { LogoIconWhite } from '@dhis2/ui-core'
import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    padding: 12px 0;
    background-color: ${colors.blueDark};
    box-shadow: 0 0 3px 0 ${colors.shadowDark};
    z-index: 1000;
`

export const Icon = styled(LogoIconWhite)`
    height: 32px;
    margin-right: 12px;
`

export const Title = styled(Link)`
    margin-left: 1rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    align-content: center;
    margin-block-start: 0;
    margin-block-end: 0;
    &:focus,
    &:hover {
        outline: unset;
        color: ${colors.greyLight};
        path {
            fill: ${colors.greyLight};
        }
    }
`
