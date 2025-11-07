import React from 'react'
import Title from '../../components/Title/Title'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Title text={'Error 404 :) | Страница не найдена'} className={'text-accent-primary'} />
      <Link
        to="/"
        className=" bg-accent-primary mt-10 text-white p-3 rounded-xl border-b-accent-primary border-b"
      >
        Вернуться на главную
      </Link>
    </div>
  )
}

export default NotFound
