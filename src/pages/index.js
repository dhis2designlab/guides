import React from 'react'
import { Layout, GuideCards } from '../components'

const guides = [
    {
        title: 'DHIS2 API',
        summary: 'Learn to use the DHIS2 API.',
        path: '/api',
    },
    {
        title: 'DHIS2 UI libraries',
        summary: 'Learn to use the DHIS2 UI libraries.',
        path: '/ui',
    },
    {
        title: 'DHIS2 apps',
        summary: 'Learn to create DHIS2 apps.',
        path: '/apps',
    },
    {
        title: 'DHIS2 widgets',
        summary: 'Learn to create DHIS2 widgets.',
        path: '/widgets',
    },
]

export default () => (
    <Layout>
        <GuideCards guides={guides} />
    </Layout>
)
