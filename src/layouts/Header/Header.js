import React from 'react'
import { Title, Container, Logo } from './style'
import { AboutLink } from './AboutLink'

export const Header = () => (
    <Container>
        <Title title="Home" to="/">
            <Logo />
            <span>DHIS2 Design Lab</span>
        </Title>
        <AboutLink />
    </Container>
)
