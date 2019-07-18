import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import { Container, StyledLink, StyledCard, Description, Title } from './style'

const GuideCard = ({ path, title, description }) => (
    <StyledLink to={path}>
        <StyledCard>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </StyledCard>
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
