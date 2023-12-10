import React from 'react';

interface SVGTagProps {
    src: string
    className?: string
    width?: number
    height?: number
}

function SVGTag(props: SVGTagProps) {
    const {
        src,
        className,
        ...other
    } = props;

    return (
        <svg width={20} height={20} className={className} {...other} >
            <use href={src} width={20} height={20} {...other} />
        </svg>
    )
}

export default SVGTag;