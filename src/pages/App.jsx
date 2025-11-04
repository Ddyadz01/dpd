import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Container from '../components/Container/Container'
import { useStore } from '../store/store'

const App = () => {
  const { changePath } = useStore()

  const { pathname } = useLocation()
  useEffect(() => {
    changePath(pathname)
  }, [pathname])
  return (
    <div className="">
      <Header />
      <Container classname={'mt-5'}>
        <div className="flex min-h-screen h-screen">
          <Sidebar />
          <div className=" w-full">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App
