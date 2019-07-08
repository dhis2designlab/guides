import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../constants/colors'

export const BodyStyle = createGlobalStyle`
    body {
        background-color: ${colors.greyDark};
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

export const Container = styled.section`
    margin-top: 60px;
    display: flex;
    flex: 1;
`

export const Wrapper = styled.section`
    width: 100%;
    margin-left: 18rem;
`

export const Main = styled.main`
    width: 100%;
    max-width: 864px;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
`
