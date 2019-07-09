import React from 'react'
import { Content } from './Content'
import { useWidth } from '../../utils/useWidth'

export const Article = ({ children }) => {
    const narrow = useWidth(900)

    return <Content narrow={narrow}>{children}</Content>
}
