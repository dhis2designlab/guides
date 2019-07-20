import React from 'react'
import { arrayOf, shape, func, string } from 'prop-types'
import { NavItem } from './NavItem'

export const NavItems = ({ headings, onLink }) => (
    <>
        {headings.map(({ path, label }) => (
            <NavItem key={path} path={path} label={label} onLink={onLink} />
        ))}
    </>
)

NavItems.propTypes = {
    onLink: func.isRequired,
    headings: arrayOf(
        shape({
            path: string.isRequired,
            label: string.isRequired,
        })
    ).isRequired,
}
