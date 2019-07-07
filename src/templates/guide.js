import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'

const StyledCard = styled(Card)`
    margin: 20px;
    width: calc(100% - 40px) !important;
    @media (max-width: 844px) {
        border-radius: unset !important;
        margin: unset;
        width: 100% !important;
        .vscode-highlight {
            margin-left: -24px;
            margin-right: -24px;
            border-radius: unset;
        }
    }
`

const Content = styled.div`
    padding: 24px;
    a {
        text-decoration: none;
        color: #3172b4;
        outline: none;
    }
    a:hover:not(.anchor),
    a:focus:not(.anchor) {
        border-bottom: 1px solid #3172b4;
    }
    p {
        line-height: 2rem;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
        code {
            font-family: monospace;
            background-color: #1e1e1e;
            color: #d4d4d4;
            border-radius: 3px;
            margin: 0;
            padding: 0.2em 0.4em;
        }
    }
    h1 {
        font-size: 3rem;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
    }
    h2 {
        font-size: 2rem;
        margin-block-start: 3rem;
        margin-block-end: 1rem;
    }
    h3 {
        font-size: 1.4rem;
        margin-block-start: 3rem;
        margin-block-end: 1rem;
    }
    .vscode-highlight-code {
        font-size: 14px;
        line-height: 1.4;
        span {
            font-family: monospace;
        }
        .vscode-highlight-line {
            padding-right: 0;
        }
        .vscode-highlight-line-highlighted {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`

const guide = ({ data }) => {
    const { html } = data.markdownRemark

    return (
        <StyledCard>
            <Content dangerouslySetInnerHTML={{ __html: html }} />
        </StyledCard>
    )
}

export default guide

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`
