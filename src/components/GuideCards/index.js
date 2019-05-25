import React from 'react'
import { Link } from 'gatsby'
import { Spacer, Container, StyledCard, Summary, Heading } from './style'

const GuideCard = ({ title, description, path }) => (
    <Spacer>
        <Link to={path}>
            <StyledCard>
                <Heading>{title}</Heading>
                <Summary>{description}</Summary>
            </StyledCard>
        </Link>
    </Spacer>
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
