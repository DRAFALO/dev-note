'use client'

import React from 'react'
import { useTheme } from 'next-themes'

import sx from './ThemeToggle.module.scss'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <label
      className={sx.switch}
      htmlFor='theme-toggle'
      aria-label='Theme Toggle'
    >
      <input
        type='checkbox'
        id='theme-toggle'
        onChange={onToggle}
        defaultChecked={theme === 'dark'}
      />
      <span className={sx.slider} />
    </label>
  )
}

export default React.memo(ThemeToggle)
