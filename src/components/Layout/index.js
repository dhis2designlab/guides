import React from 'react'
import { Helmet } from 'react-helmet'
import { BodyStyle, Main, BannerTitle, BannerContainer, Icon } from './style'

export const Layout = ({ children }) => (
    <>
        <Helmet title="DHIS2 Design Lab">
            <meta
                name="description"
                content="DHIS2 front-end development guides."
            />
        </Helmet>
        <BodyStyle />
        <BannerContainer>
            <BannerTitle to="/">
                <Icon />
                <span>DHIS2 Design Lab</span>
            </BannerTitle>
        </BannerContainer>
        <Main>{children}</Main>
    </>
)
