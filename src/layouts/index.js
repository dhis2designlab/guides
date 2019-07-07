import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'
import { BodyStyle, Content, Container, Wrapper, Main } from './style'
import { CssReset } from '@dhis2/ui-core'
import { Sidebar } from './Sidebar'

const Layout = ({ children }) => (
    <>
        <Helmet title="DHIS2 Design Lab">
            <meta
                name="description"
                content="DHIS2 front-end development guides."
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
            <Footer />
        </Content>
    </>
)

export default Layout
