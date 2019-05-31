import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from './Header'
import { Footer } from './Footer'
import { BodyStyle, Content, Main } from './style'

const Layout = ({ children }) => (
    <>
        <Helmet title="DHIS2 Design Lab">
            <meta
                name="description"
                content="DHIS2 front-end development guides."
            />
            <html lang="en" />
        </Helmet>
        <BodyStyle />
        <Content>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Content>
    </>
)

export default Layout
