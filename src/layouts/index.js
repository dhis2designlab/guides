import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { Children } from './Children'
import { Header } from './Header'
import { text } from '../constants/colors'

const BodyStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: ${text};
        font-family: Rubik;
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

const StyledSection = styled.section`
    margin-top: 57px;
    display: flex;
    flex: 1;
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
        <BodyStyle />
        <Content>
            <Header />
            <StyledSection>
                <Children>{children}</Children>
            </StyledSection>
        </Content>
    </>
)

export default Layout
