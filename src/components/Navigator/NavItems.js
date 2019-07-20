import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { NavItem } from './NavItem'

export const NavItems = ({ headings }) => (
    <>
        {headings.map(({ path, label }) => (
            <NavItem key={path} path={path} label={label} />
        ))}
    </>
)

NavItems.propTypes = {
    headings: arrayOf(
        shape({
            path: string.isRequired,
            label: string.isRequired,
        })
    ).isRequired,
}
