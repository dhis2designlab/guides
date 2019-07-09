import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { useWidth } from '../utils/useWidth'

const StyledSection = styled.section`
    margin-top: 56px;
    display: flex;
    flex: 1;
`

export const Container = ({ children }) => {
    const narrow = useWidth(900)

    return (
        <StyledSection>
            <Sidebar narrow={narrow} />
            <Main narrow={narrow}>{children}</Main>
        </StyledSection>
    )
}
