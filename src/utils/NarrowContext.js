import React, { createContext } from 'react'

export const NarrowContext = createContext(false)

export const NarrowProvider = ({ narrow, children }) => (
    <NarrowContext.Provider value={narrow}>{children}</NarrowContext.Provider>
)
