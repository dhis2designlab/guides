import { Link } from 'gatsby'
import { LogoIconWhite } from '@dhis2/ui-core'
import styled, { createGlobalStyle } from 'styled-components'

export const BodyStyle = createGlobalStyle`
    body {
        background-color: #ebebeb;
        margin: 0;
        padding: 0;
        font-family: Roboto;
    }
`

export const BannerContainer = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    height: 56px;
    background-color: #215e8c;
    box-shadow: 0 0 3px 0 #222;
`

export const Icon = styled(LogoIconWhite)`
    height: 36px;
    margin-right: 12px;
`

export const BannerTitle = styled(Link)`
    display: flex;
    color: white;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    &:hover {
        color: #afafaf;
        path {
            fill: #afafaf;
        }
    }
`

export const Main = styled.main`
    max-width: 864px;
    padding-top: 32px;
    margin-right: auto;
    margin-left: auto;
`

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    padding: 16px;
`
