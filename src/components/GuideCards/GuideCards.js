import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import styled from 'styled-components'
import { GuideCard } from './GuideCard'

const StyledNav = styled.nav`
    display: grid;
    column-width: 330px;
    grid-template-columns: repeat(auto-fit, 330px);
    column-gap: 24px;
    row-gap: 24px;
    padding: 24px;
    justify-content: center;
`

export const GuideCards = ({ guides }) => (
    <StyledNav>
        {guides.map(g => (
            <GuideCard
                key={g.path}
                path={g.path}
                title={g.title}
                description={g.description}
            />
        ))}
    </StyledNav>
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
