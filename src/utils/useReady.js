import { useState, useEffect } from 'react'

export const useReady = () => {
    const [ready, setReady] = useState(false)

    useEffect(() => setReady(true), [])

    return ready
}
