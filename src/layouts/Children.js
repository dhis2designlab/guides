import React from 'react'
import { NarrowProvider, useNarrow, useReady } from '../utils'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

export const Children = ({ children }) => {
    const ready = useReady()
    const narrow = useNarrow(840)

    if (!ready) return null

    return (
        <NarrowProvider narrow={narrow}>
            <Sidebar />
            <Main narrow={narrow}>{children}</Main>
        </NarrowProvider>
    )
}
