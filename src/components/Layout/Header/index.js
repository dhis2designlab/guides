import React from 'react'
import { Title, Container, Icon } from './style'

export const Header = () => (
    <Container>
        <Title title="Home" to="/">
            <Icon />
            <span>DHIS2 Design Lab</span>
        </Title>
    </Container>
)
