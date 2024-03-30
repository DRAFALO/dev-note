import React from 'react'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

interface Props extends LucideProps {
  name: keyof typeof dynamicIconImports
}

function Icon({ name, ...props }: Readonly<Props>) {
  const LucideIcon = dynamic(dynamicIconImports[name])

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <LucideIcon {...props} />
}

export default React.memo(Icon)
