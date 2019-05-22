import styled, { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

export const BodyStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-color: rgb(240, 240, 240);
        margin: 0;
        padding: 0;
        font-family: Roboto;
        height: 100%;
    }
`

export const Container = styled.section`
    display: flex;
    height: 100%;
`

export const Main = styled.main`
    max-width: 1600px;
    width: 100%;
`

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px;
`
