import React from 'react'
import { Container, StyledLink, StyledCard, Description, Title } from './style'

const GuideCard = ({ path, title, description }) => (
    <StyledLink to={path}>
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
                path={g.path}
                title={g.title}
                description={g.description}
            />
        ))}
    </Container>
)
