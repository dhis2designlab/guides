import React from 'react'
import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'
import { Layout } from '../components'

const Margin = styled.div`
    margin: 16px 24px;
`

const Content = styled.div`
    padding: 32px;
    p {
        line-height: 1.5rem;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
    }
`

export default () => (
    <Layout>
        <Margin>
            <Card>
                <Content>
                    <h1>404</h1>
                    <p>Page does not exist.</p>
                </Content>
            </Card>
        </Margin>
    </Layout>
)
