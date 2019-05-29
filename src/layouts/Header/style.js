import { Link } from 'gatsby'
import { LogoIconWhite } from '@dhis2/ui-core'
import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 12px 0;
    background-color: #215e8c;
    box-shadow: 0 0 3px 0 #222;
`

export const Icon = styled(LogoIconWhite)`
    height: 36px;
    margin-right: 12px;
`

export const Title = styled(Link)`
    display: flex;
    color: white;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    &:hover {
        color: #dadada;
        path {
            fill: #dadada;
        }
    }
`
