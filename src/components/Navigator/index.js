import React from 'react'
import { Tree } from './Tree'

export const Navigator = ({ pages }) => (
    <nav>
        {pages.map(({ heading, subheadings }) => (
            <Tree
                key={heading.path}
                heading={heading}
                subheadings={subheadings}
            />
        ))}
    </nav>
)
