import React from 'react'
import { Title, Container, Logo } from './style'
import { Pages } from './Pages'

export const Header = ({ narrow }) => (
    <Container>
        <Title title="Home" to="/">
            <Logo />
            <span>DHIS2 Design Lab</span>
        </Title>
        {!narrow && <Pages />}
    </Container>
)
