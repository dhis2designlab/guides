//import { bool } from 'prop-types'
import styled from 'styled-components'
import { colors } from '@dhis2/ui-core'

export const Title = styled.h1`
    font-weight: 500;
`

export const Heading = styled.h2`
    color: #0d0d0e;
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 500;
`

export const Text = styled.div`
    color: #0d0d0e;
`

export const Label = styled.div`
    /*color: ${colors.grey700};*/
    white-space: nowrap;
    padding: 0px 12px 12px 16px;
    line-height: 24px;
    font-weight: 500;
`

/*Label.propTypes = {
    required: bool,
    disabled: bool,
}*/
