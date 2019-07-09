import React from 'react'
import { graphql } from 'gatsby'
import { Article } from '../components'

const guide = ({ data }) => (
    <Article>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Article>
)

export default guide

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`
