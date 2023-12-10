'use client'

import React, {PropsWithChildren} from 'react'
import { ThemeProvider } from 'next-themes'

function Provider({ children}: PropsWithChildren<any>) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider
