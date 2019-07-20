import React, { useContext } from 'react'
import { node } from 'prop-types'
import { StyledArticle } from './StyledArticle'
import { NarrowContext } from '../../utils'

export const Article = ({ children }) => {
    const narrow = useContext(NarrowContext)

    return <StyledArticle narrow={narrow}>{children}</StyledArticle>
}

Article.propTypes = { children: node }
