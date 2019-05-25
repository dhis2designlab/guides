import React from 'react'
import { StyledCard, Content } from './style'

export const Section = ({ children }) => (
    <StyledCard>
        <Content>{children}</Content>
    </StyledCard>
)
