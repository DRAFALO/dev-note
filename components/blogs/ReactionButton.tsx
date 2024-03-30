import * as React from 'react'

import { cn } from '@/lib/utils'

import AppIcon from '../common/AppIcon'

export interface Props {
  icon: any
  count: number
  className?: string
}

export default function ReactionButton({ icon, count, className = '' }: Readonly<Props>) {
  return (
    <button
      type='button'
      className='flex flex-col gap-2'
    >
      <AppIcon
        name={icon}
        className={cn('h-4 w-4 text-gray-500', className)}
      />
      <span>{count}</span>
    </button>
  )
}
