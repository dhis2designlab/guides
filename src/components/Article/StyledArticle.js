import styled, { css } from 'styled-components'
import * as colors from '../../constants/colors'

export const StyledArticle = styled.article`
    padding: 24px;
    max-width: 776px;
    margin-right: auto;
    margin-left: auto;
    font-family: Lato;
    color: black;
    a {
        text-decoration: none;
        outline: none;
        color: ${colors.blue};
    }
    a:hover:not(.anchor),
    a:focus:not(.anchor) {
        border-bottom: 1px solid ${colors.blue};
    }
    p {
        line-height: 1.8rem;
        margin-block-start: 2rem;
        margin-block-end: 2rem;
        code {
            font-family: monospace;
            background-color: ${colors.dark};
            color: ${colors.code};
            border-radius: 3px;
            margin: 0;
            padding: 0.2em 0.4em;
        }
    }
    h1,
    h2 {
        border-bottom: 1px solid ${colors.accent};
    }
    h1 {
        font-size: 2.6rem;
        line-height: 3.6rem;
        margin-block-start: 1rem;
        margin-block-end: 2rem;
    }
    h2 {
        font-size: 2rem;
        line-height: 3rem;
        margin-block-start: 5rem;
    }
    h3 {
        font-size: 1.4rem;
        line-height: 2.4rem;
        margin-block-start: 4rem;
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
        border-left: 6px solid ${colors.accent};
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
    .vscode-highlight-code {
        font-family: monospace;
        font-size: 14px;
        line-height: 1.4;
        .vscode-highlight-line {
            padding-right: 0;
        }
        .vscode-highlight-line-highlighted {
            background-color: ${colors.highlight};
        }
    }
    ${({ narrow }) => {
        if (narrow)
            return css`
                .vscode-highlight {
                    margin-left: -24px;
                    margin-right: -24px;
                    border-radius: unset;
                }
            `
    }}
`
