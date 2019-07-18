import React, { useContext } from 'react'
import { node } from 'prop-types'
import { StyledCard } from './StyledCard'
import { StyledDiv } from './StyledDiv'
import { NarrowContext } from '../../utils/NarrowContext'

export const Article = ({ children }) => {
    const narrow = useContext(NarrowContext)

    return (
        <StyledCard narrow={narrow}>
            <StyledDiv>{children}</StyledDiv>
        </StyledCard>
    )
}

Article.propTypes = { children: node }
