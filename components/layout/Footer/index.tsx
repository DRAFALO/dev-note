import React from 'react'

import { LocaleKeys } from '@/types/locales'

interface FooterProps {
  dictionary: LocaleKeys
}

function Footer(props: FooterProps) {
  const { dictionary } = props

  return <footer className='container'>{dictionary.DevNote}</footer>
}

export default React.memo(Footer)
