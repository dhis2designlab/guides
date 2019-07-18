import React, { useState, useEffect } from 'react'
import { NarrowProvider } from '../utils/NarrowContext'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

const useReady = () => {
    const [ready, setReady] = useState(false)

    useEffect(() => setReady(true), [])

    return ready
}

const useNarrow = limit => {
    const isClient = typeof window === 'object'

    const isLower = () => (isClient ? window.innerWidth < limit : false)

    const [narrow, setNarrow] = useState(isLower)

    useEffect(() => {
        if (!isClient) return false

        const handleResize = () => setNarrow(isLower())

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isClient])

    return narrow
}

const StyledSection = styled.section`
    margin-top: 56px;
    display: flex;
    flex: 1;
`

export const Children = ({ children }) => {
    const ready = useReady()
    const narrow = useNarrow(900)

    if (!ready) return null

    return (
        <StyledSection>
            <NarrowProvider narrow={narrow}>
                <Sidebar />
                <Main>{children}</Main>
            </NarrowProvider>
        </StyledSection>
    )
}
