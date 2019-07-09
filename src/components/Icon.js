import React from 'react'
import { string } from 'prop-types'

export const Icon = ({ icon, color, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={className}
    >
        <path d={icon} fill={color} />
    </svg>
)

Icon.defaultProps = {
    color: 'white',
}

Icon.protoTypes = {
    icon: string.isRequired,
    color: string,
    className: string,
}
