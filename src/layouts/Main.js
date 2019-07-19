import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { NarrowContext } from '../utils/NarrowContext'

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
    margin-right: auto;
    margin-left: auto;
    flex: 1;
`

export const Main = ({ children }) => {
    const narrow = useContext(NarrowContext)

    return (
        <Wrapper narrow={narrow}>
            <StyledMain>{children}</StyledMain>
        </Wrapper>
    )
}
