import React from 'react'
import cn from 'classnames'

const Title = ({ text, className }) => {
  return <h3 className={cn('font-bold text-4xl', className)}>{text}</h3>
}

export default Title
