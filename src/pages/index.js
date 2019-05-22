import React from 'react'
import { Layout, GuideCards } from '../components'

const guides = [
    {
        title: 'API',
        summary: 'Learn to use the DHIS2 API.',
        path: '/api',
    },
    {
        title: 'DHIS2 UI',
        summary: 'Learn to the use DHIS2 UI library.',
        path: '/ui',
    },
    {
        title: 'Apps',
        summary: 'Learn to create DHIS2 apps.',
        path: '/apps',
    },
    {
        title: 'Widgets',
        summary: 'Learn to create DHIS2 widgets.',
        path: '/widgets',
    },
]

export default () => (
    <Layout>
        <GuideCards guides={guides} />
    </Layout>
)
