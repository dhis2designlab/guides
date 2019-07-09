import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { CssReset } from '@dhis2/ui-core'
import { Header } from './Header'
import { Container } from './Container'
import * as colors from '../constants/colors'

const BodyStyle = createGlobalStyle`
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

const Content = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

const Layout = ({ children }) => (
    <>
        <Helmet title="DHIS2 Design Lab">
            <meta
                name="description"
                content="DHIS2 web application development guides."
            />
            <html lang="en" />
        </Helmet>
        <CssReset />
        <BodyStyle />
        <Content>
            <Header />
            <Container>{children}</Container>
        </Content>
    </>
)

export default Layout
