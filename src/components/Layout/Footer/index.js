import React from 'react'
import { Container, Nav, NavLink } from './style'

const links = [
    {
        title: 'DHIS2 Design Lab',
        url:
            'https://www.mn.uio.no/ifi/english/research/networks/hisp/dhis2-design-lab/',
    },
    {
        title: 'DHIS2 Docs',
        url: 'https://www.dhis2.org/documentation',
    },
    {
        title: 'GitHub',
        url: 'https://github.com/dhis2designlab',
    },
]

export const Footer = () => (
    <Container>
        <Nav>
            {links.map(link => (
                <NavLink title={link.title} href={link.url}>
                    {link.title}
                </NavLink>
            ))}
        </Nav>
    </Container>
)
