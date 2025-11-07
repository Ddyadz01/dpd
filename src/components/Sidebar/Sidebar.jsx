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
    <aside className="w-[400px] text-text-contrast sticky top-24 self-start">
      <div className="relative flex h-[calc(100vh-120px)] flex-col rounded-2xl border border-border-surface bg-white/70 backdrop-blur-xl shadow-sm">
        <div className="px-4 py-5">
          <div className="shrink-0">
            <div className="rounded-xl border border-white/60 bg-white/70 backdrop-blur-md px-3 py-2 shadow-sm">
              <Search />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-5 pr-6">
          <div className="space-y-4 pr-2">
            {filteredData?.map((item) => (
              <SectionItem key={item.title} data={item} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
