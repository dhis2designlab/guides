import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { Container } from './Container'
import { NarrowProvider } from '../utils/NarrowContext'

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

export const Children = ({ children }) => {
    const ready = useReady()
    const narrow = useNarrow(900)

    if (!ready) return null

    return (
        <NarrowProvider narrow={narrow}>
            <Header narrow={narrow} />
            <Container limit={900}>{children}</Container>
        </NarrowProvider>
    )
}
