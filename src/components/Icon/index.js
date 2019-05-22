import React from 'react'
//import { string } from 'prop-types'

export const Icon = ({ vector }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d={vector} />
    </svg>
)

//Icon.propTypes = { vector: string }
