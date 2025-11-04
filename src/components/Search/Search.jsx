import React from 'react'
import { useStore } from '../../store/store'

const Search = () => {
  const { searchValue, changeSearchValue } = useStore()

  const onChange = (e) => {
    changeSearchValue(e.target.value)
  }
  return (
    <input
      className="border-line border w-full rounded-lg p-2 outline-0 text-sm focus:border-main transition"
      type="text"
      value={searchValue}
      onChange={onChange}
      placeholder="Поиск"
    />
  )
}

export default Search
