import styled, { css } from 'styled-components'
import { Card } from '@dhis2/ui-core'

export const StyledCard = styled(Card)`
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
