import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import { Container, StyledLink, Description, Title, Content } from './style'
import { Banner } from './Banner'

const GuideCard = ({ path, title, description }) => (
    <StyledLink to={path}>
        <Banner />
        <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Content>
    </StyledLink>
)

GuideCard.propTypes = {
    path: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
}

export const GuideCards = ({ guides }) => (
    <Container>
        {guides.map(g => (
            <GuideCard
                key={g.path}
                path={g.path}
                title={g.title}
                description={g.description}
            />
        ))}
    </Container>
)

GuideCards.propTypes = {
    guides: arrayOf(
        shape({
            path: string.isRequired,
            title: string.isRequired,
            description: string.isRequired,
        }).isRequired
    ),
}
