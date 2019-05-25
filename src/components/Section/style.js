import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'

export const StyledCard = styled(Card)`
    margin: 16px;
`

export const Content = styled.div`
    padding: 32px;
    p {
        line-height: 1.5rem;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
    }
    .vscode-highlight-code {
        overflow: hidden;
    }
    .vscode-highlight-line-highlighted {
        background-color: rgba(255, 255, 255, 0.1);
    }
`
