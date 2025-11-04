import React from 'react'
import { Outlet } from 'react-router'
import { useStore } from '../../store/store'
import Title from '../../components/Title/Title'

const Start = () => {
  const { pathTitle } = useStore()
  return (
    <div className="px-4 pb-20 overflow-scroll h-full text-sm md:text-base leading-relaxed">
      <Title text={pathTitle} className={'border-b pb-2 border-main'} />

      <Outlet />
    </div>
  )
}

export default Start
