import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'
import { AboutLink } from './AboutLink'
import * as colors from '../../constants/colors'

const Container = styled.header`
    position: fixed;
    width: 100%;
    height: 56px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    background-color: ${colors.accentDark};
    border-bottom: 1px solid ${colors.border};
    z-index: 1000;
`

export const Header = () => (
    <Container>
        <Title />
        <AboutLink />
    </Container>
)
