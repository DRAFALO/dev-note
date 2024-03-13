/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

interface SVGTagProps {
  src: string
  className?: string
  width?: number
  height?: number
  ['aria-label']: string
}

function SVGTag(props: SVGTagProps) {
  const { src, className, ...other } = props

  return (
    <svg
      width={20}
      height={20}
      className={className}
      {...other}
    >
      <use
        href={src}
        width={20}
        height={20}
        {...other}
      />
    </svg>
  )
}

SVGTag.defaultProps = {
  width: 20,
  height: 20,
  className: '',
}

export default React.memo(SVGTag)
