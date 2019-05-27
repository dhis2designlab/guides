import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'

export const Spacer = styled.div`
    margin: 16px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
`

export const StyledCard = styled(Card)`
    height: 200px !important;
    width: 360px !important;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    &:hover {
        box-shadow: rgba(64, 75, 90, 0.3) 0px 0px 1px 0px,
            rgba(64, 75, 90, 0.3) 0px 14px 28px -6px;
        cursor: pointer;
    }
`

export const Heading = styled.h2`
    color: #0d0d0e;
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 500;
`

export const Description = styled.p`
    padding-top: 24px;
    color: black;
`
