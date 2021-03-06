import { useState, useEffect } from 'react'

export const useNarrow = limit => {
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
