import React, { useEffect, useState } from 'react'
import SectionItem from '../SectionItem/SectionItem'
import { SECTION_ALL, SECTIONS_DOWNLOAD, SECTIONS_LOADING } from '../../data/Links.data'
import Search from '../Search/Search'
import { useStore } from '../../store/store'

const Sidebar = () => {
  const { searchValue } = useStore()
  const [filteredData, setFilteredData] = useState(null)

  const dataFilter = [{ ...SECTION_ALL }, { ...SECTIONS_LOADING }, { ...SECTIONS_DOWNLOAD }]

  useEffect(() => {
    if (!searchValue) return setFilteredData(dataFilter)

    const data = dataFilter.map((item) => {
      const result = item.data.filter((item) =>
        item.title.toLowerCase().includes(String(searchValue).toLowerCase()),
      )
      return { title: item.title, icon: item.icon, data: result }
    })

    setFilteredData(data)
  }, [searchValue])

  return (
    <div className="w-[360px]   text-main overflow-y-scroll pb-25 pr-3 scroll-smooth">
      <Search />

      {filteredData?.map((item) => (
        <SectionItem data={item} />
      ))}
    </div>
  )
}

export default Sidebar
