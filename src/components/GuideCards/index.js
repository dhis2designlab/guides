import React from 'react'
import { Link } from 'gatsby'
import { Spacer, Container, StyledCard, Description, Heading } from './style'

const GuideCard = ({ title, description, path }) => (
    <Spacer>
        <Link to={path} title={title}>
            <StyledCard>
                <Heading>{title}</Heading>
                <Description>{description}</Description>
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
