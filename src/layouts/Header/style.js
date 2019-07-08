import { Link } from 'gatsby'
import { LogoIconWhite } from '@dhis2/ui-core'
import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 12px 0;
    background-color: ${colors.blueDark};
    box-shadow: 0 0 3px 0 ${colors.shadowDark};
    z-index: 1000;
`

export const Icon = styled(LogoIconWhite)`
    height: 36px;
    margin-right: 12px;
`

export const Title = styled(Link)`
    margin-left: 18rem;
    display: flex;
    color: white;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
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
