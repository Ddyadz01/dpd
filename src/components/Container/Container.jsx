import React from 'react'
import cn from 'classnames'

const Container = ({ children, classname }) => {
  return <div className={cn('max-w-[1376px] w-full m-auto', classname)}>{children}</div>
}

export default Container
