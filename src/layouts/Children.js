import React from 'react'
import { Location } from '@reach/router'
import { NarrowProvider, useNarrow, useReady } from '../utils'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

export const Children = ({ children }) => {
    const ready = useReady()
    const narrow = useNarrow(840)

    if (!ready) return null

    return (
        <NarrowProvider narrow={narrow}>
            <Location>
                {({ location }) => (
                    <Sidebar path={location.pathname} hash={location.hash} />
                )}
            </Location>
            <Main narrow={narrow}>{children}</Main>
        </NarrowProvider>
    )
}
