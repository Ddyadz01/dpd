import React from 'react'
import cn from 'classnames'

export const TitleMedium = ({ className, text }) => {
  return (
    <h2 className={cn('text-xl mt-4 mb-2', className)}>
      <b>{text}</b>
    </h2>
  )
}
