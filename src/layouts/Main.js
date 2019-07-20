import React from 'react'
import { node, bool } from 'prop-types'
import styled, { css } from 'styled-components'

const StyledMain = styled.main`
    width: 100%;
    margin-left: 18rem;
    ${({ narrow }) => {
        if (narrow)
            return css`
                margin-left: unset;
            `
    }}
`

export const Main = ({ children, narrow }) => (
    <StyledMain narrow={narrow}>{children}</StyledMain>
)

Main.propTypes = {
    children: node,
    narrow: bool,
}
