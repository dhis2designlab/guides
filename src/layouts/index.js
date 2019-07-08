import React from 'react'
import { Helmet } from 'react-helmet'
import { CssReset } from '@dhis2/ui-core'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { BodyStyle, Content, Container, Wrapper, Main } from './style'

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
            <Container>
                <Sidebar />
                <Wrapper>
                    <Main>{children}</Main>
                </Wrapper>
            </Container>
        </Content>
    </>
)

export default Layout
