import React from 'react'
import { Outlet } from 'react-router'
import { useStore } from '../../store/store'
import Title from '../../components/Title/Title'

const Start = () => {
  const { pathTitle } = useStore()
  return (
    <div className="px-4 pb-20 text-sm md:text-base leading-relaxed min-h-full">
      <Title
        text={pathTitle}
        className={'border-b pb-2 border-accent-primary text-accent-primary'}
      />

      <Outlet />
    </div>
  )
}

export default Start
