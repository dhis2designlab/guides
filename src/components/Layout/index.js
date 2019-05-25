import React from 'react'
import { BodyStyle, Main, BannerTitle, BannerContainer } from './style'

export const Layout = ({ children }) => (
    <>
        <BodyStyle />
        <BannerContainer>
            <BannerTitle to="/">dhis2 design lab</BannerTitle>
        </BannerContainer>
        <Main>{children}</Main>
    </>
)
