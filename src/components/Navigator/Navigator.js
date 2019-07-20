import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { Tree } from './Tree'

export const Navigator = ({ pages, path }) => (
    <nav>
        {pages.map(({ heading, subheadings }) => (
            <Tree
                key={heading.path}
                heading={heading}
                subheadings={subheadings}
                path={path}
            />
        ))}
    </nav>
)

Navigator.propTypes = {
    path: string.isRequired,
    pages: arrayOf(
        shape({
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
        })
    ),
}
