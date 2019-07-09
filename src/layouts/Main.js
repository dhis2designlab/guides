import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    margin-left: 18rem;
    ${({ narrow }) => {
        if (narrow)
            return css`
                margin-left: unset;
            `
    }}
`

const StyledMain = styled.main`
    width: 100%;
    max-width: 864px;
    margin-right: auto;
    margin-left: auto;
    flex: 1;
    ${({ narrow }) => {
        if (narrow)
            return css`
                height: 100%;
                max-width: unset;
            `
    }}
`

export const Main = ({ narrow, children }) => (
    <Wrapper narrow={narrow}>
        <StyledMain narrow={narrow}>{children}</StyledMain>
    </Wrapper>
)
