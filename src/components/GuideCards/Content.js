import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { text } from '../../constants/colors'

const Title = styled.h2`
    color: ${text};
    font-size: 1.2rem;
    font-weight: 410;
    margin-block-start: 1.75rem;
    margin-block-end: 1.5rem;
    margin-inline-start: 32px;
    margin-inline-end: 32px;
`

const Description = styled.p`
    color: ${text};
    margin-block-end: 3em;
    margin-inline-start: 32px;
    margin-inline-end: 32px;
`

export const Content = ({ title, description }) => (
    <>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </>
)

Content.propTypes = {
    title: string.isRequired,
    description: string.isRequired,
}
