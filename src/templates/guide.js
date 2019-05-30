import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'

const Margin = styled.div`
    margin: 16px 24px;
`

const Content = styled.div`
    padding: 32px;
    a {
        text-decoration: none;
        color: #3172b4;
    }
    a:hover {
        border-bottom: 1px solid #3172b4;
    }
    p {
        line-height: 1.5rem;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
        code {
            background-color: #1e1e1e;
            color: #d4d4d4;
            border-radius: 3px;
            margin: 0;
            padding: 0.2em 0.4em;
        }
    }

    .vscode-highlight-code {
        font-size: 14px;
        overflow: hidden;
    }
    .vscode-highlight-line-highlighted {
        background-color: rgba(255, 255, 255, 0.1);
    }
`

const guide = ({ data }) => {
    const { html } = data.markdownRemark

    return (
        <Margin>
            <Card>
                <Content dangerouslySetInnerHTML={{ __html: html }} />
            </Card>
        </Margin>
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
