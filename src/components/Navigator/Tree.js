import React from 'react'
import { Location } from '@reach/router'
import { arrayOf, shape, func, string } from 'prop-types'
import { Branch } from './Branch'

export const Tree = ({ heading, subheadings, onLink }) => (
    <Location>
        {({ location }) => (
            <Branch
                heading={heading}
                pathname={location.pathname}
                subheadings={subheadings}
                onLink={onLink}
            />
        )}
    </Location>
)

Tree.propTypes = {
    heading: shape({
        path: string.isRequired,
        label: string.isRequired,
    }).isRequired,
    subheadings: arrayOf(
        shape({
            path: string.isRequired,
            label: string.isRequired,
        })
    ),
    onLink: func.isRequired,
}
