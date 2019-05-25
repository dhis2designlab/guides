import styled, { createGlobalStyle } from 'styled-components'

export const BodyStyle = createGlobalStyle`
    body {
        background-color: #ebebeb;
        margin: 0;
        padding: 0;
        font-family: Roboto;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
`

export const Content = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

export const Main = styled.main`
    width: 100%;
    max-width: 864px;
    padding-top: 32px;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
`
