import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

const StyledSection = styled.section`
    margin-top: 56px;
    display: flex;
    flex: 1;
`

export const Container = ({ children }) => (
    <StyledSection>
        <Sidebar />
        <Main>{children}</Main>
    </StyledSection>
)
