'use client'

import React from 'react'
import {useTheme} from "next-themes";

function ThemeToggle() {
    const {theme, setTheme } = useTheme()
    const onToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button onClick={onToggle}>
            {theme === 'light' ? '🌜' : '🌞'}

            <span className="sr-only">Toggle theme</span>
        </button>
    )
}

export default ThemeToggle