import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@dhis2/ui-core'
import * as colors from '../../constants/colors'
import { NarrowContext } from '../../utils/NarrowContext'

const StyledCard = styled(Card)`
    margin: 20px;
    width: calc(100% - 40px) !important;
    ${({ narrow }) => {
        if (narrow)
            return css`
                border-radius: unset !important;
                margin: unset;
                width: 100% !important;
                .vscode-highlight {
                    margin-left: -24px;
                    margin-right: -24px;
                    border-radius: unset;
                }
            `
    }}
`

const StyledDiv = styled.div`
    padding: 24px;
    a {
        text-decoration: none;
        color: ${colors.blueDark};
        outline: none;
    }
    a:hover:not(.anchor),
    a:focus:not(.anchor) {
        border-bottom: 1px solid ${colors.blueDark};
    }
    p {
        line-height: 1.8rem;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
        code {
            font-family: monospace;
            background-color: ${colors.dark};
            color: ${colors.code};
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
    ul {
        margin-block-start: 0;
    }
    li {
        line-height: 1.4rem;
    }
    blockquote {
        background: ${colors.accentLight};
        padding: 0.01rem 2rem;
        border-left: 3px solid ${colors.accent};
        margin-inline-start: 0;
        margin-inline-end: 0;
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
            background-color: ${colors.highlight};
        }
    }
`

export const Content = ({ children }) => {
    const narrow = useContext(NarrowContext)

    return (
        <StyledCard narrow={narrow}>
            <StyledDiv>{children}</StyledDiv>
        </StyledCard>
    )
}
