import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import AppLink from '@/components/common/AppLink'
import LangToggle from '@/components/layout/Header/LangToggle'

import { ROUTES } from '@/constants/routes'
import { LocaleKeys } from '@/types/locales'

const ThemeToggle = dynamic(() => import('@/components/layout/Header/ThemeToggle'), { ssr: false })

interface NavBarProps {
  lang: string
  dictionary: LocaleKeys
}

function Header(props: NavBarProps) {
  const { lang, dictionary } = props

  return (
    <header className='sticky z-header bg-white py-3'>
      <div className='container grid grid-cols-12'>
        <div className='col-span-6'>
          <AppLink
            href={ROUTES.HOME.LINK}
            aria-label={dictionary.DevNote}
          >
            <Image
              src='/svg/logo.svg'
              alt='Logo'
              width={40}
              height={40}
            />
          </AppLink>
        </div>

        <div className='col-span-6 flex items-center justify-end gap-4'>
          <ThemeToggle />

          <LangToggle lang={lang} />
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
