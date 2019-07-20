import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { Branch } from './Branch'

export const Tree = ({ heading, subheadings, path }) => (
    <Branch
        heading={heading}
        pathname={location.pathname}
        subheadings={subheadings}
        path={path}
    />
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
    path: string.isRequired,
}
