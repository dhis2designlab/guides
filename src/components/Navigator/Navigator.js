import React from 'react'
import { func, arrayOf, shape, string } from 'prop-types'
import { Tree } from './Tree'

export const Navigator = ({ pages, onLink }) => (
    <nav>
        {pages.map(({ heading, subheadings }) => (
            <Tree
                key={heading.path}
                heading={heading}
                subheadings={subheadings}
                onLink={onLink}
            />
        ))}
    </nav>
)

Navigator.propTypes = {
    onLink: func.isRequired,
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
