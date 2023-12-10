'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import {ThemeProviderProps} from 'next-themes/dist/types'

function Provider({ children, ...props}: ThemeProviderProps) {
    return (
        <ThemeProvider {...props}>
            {children}
        </ThemeProvider>
    )
}

export default Provider
