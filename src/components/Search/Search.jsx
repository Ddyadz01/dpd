import React from 'react'
import { useStore } from '../../store/store'

const Search = () => {
  const { searchValue, changeSearchValue } = useStore()

  const onChange = (e) => {
    changeSearchValue(e.target.value)
  }
  return (
    <input
      className="w-full bg-transparent text-sm text-text-contrast placeholder:text-text-muted outline-none focus:outline-none"
      type="text"
      value={searchValue}
      onChange={onChange}
      placeholder="Поиск"
    />
  )
}

export default Search
