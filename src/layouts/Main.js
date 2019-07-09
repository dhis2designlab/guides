import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    margin-left: 18rem;
    @media (max-width: 900px) {
        margin-left: unset;
    }
`

const StyledMain = styled.main`
    width: 100%;
    max-width: 864px;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
    @media (max-width: 900px) {
        height: 100%;
        max-width: unset;
    }
`

export const Main = ({ children }) => (
    <Wrapper>
        <StyledMain>{children}</StyledMain>
    </Wrapper>
)
