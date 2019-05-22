import React from 'react'
import { Link } from 'gatsby'
import { Heading } from '../../styles'
import { Spacer, Container, StyledCard, Summary } from './style'

const GuideCard = ({ title, summary, path }) => (
    <Spacer>
        <Link to={path}>
            <StyledCard>
                <Heading>{title}</Heading>
                <Summary>{summary}</Summary>
            </StyledCard>
        </Link>
    </Spacer>
)

export const GuideCards = ({ guides }) => (
    <Container>
        {guides.map(g => (
            <GuideCard
                key={g.title}
                title={g.title}
                summary={g.summary}
                path={g.path}
            />
        ))}
    </Container>
)
