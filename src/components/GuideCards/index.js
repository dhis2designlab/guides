import React from 'react'
import { Container, StyledLink, StyledCard, Description, Title } from './style'

const GuideCard = ({ title, description, path }) => (
    <StyledLink to={path} title={title}>
        <StyledCard>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </StyledCard>
    </StyledLink>
)

export const GuideCards = ({ guides }) => (
    <Container>
        {guides.map(g => (
            <GuideCard
                key={g.path}
                title={g.title}
                description={g.description}
                path={g.path}
            />
        ))}
    </Container>
)
