import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'
import styled from 'styled-components'
import { Banner } from './Banner'
import { Content } from './Content'
import * as colors from '../../constants/colors'

const StyledLink = styled(Link)`
    text-decoration: none;
    outline: unset;
    box-shadow: 0 0 1px 0 ${colors.shadow}, 0 3px 8px -2px ${colors.shadowDark};
    transition: 300ms;
    &:hover,
    &:focus {
        box-shadow: 0 0 1px 0 ${colors.shadowDark},
            0 8px 18px -4px ${colors.shadowLight};
    }
    &:active {
        box-shadow: 0 0 1px 0 ${colors.shadow},
            0 3px 8px -2px ${colors.shadowDark};
    }
`

export const GuideCard = ({ path, title, description }) => (
    <StyledLink to={path}>
        <Banner />
        <Content title={title} description={description} />
    </StyledLink>
)

GuideCard.propTypes = {
    path: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
}
