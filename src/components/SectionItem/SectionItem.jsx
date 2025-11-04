import { ChevronRight } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { useStore } from '../../store/store'
import cn from 'classnames'

const SectionItem = ({ data }) => {
  const { path, changePathTitle } = useStore()

  const clickLink = (title, icon) => {
    changePathTitle(title, icon)
  }

  useEffect(() => {
    if (path == null) return

    const item = data.data.find((item) => item.link == path)
    if (item) {
      changePathTitle(item.title, item.icon)
    }
  }, [path])

  return (
    <div className="mt-8">
      <h5 className="text-sm font-semibold flex items-center gap-2">
        {data?.icon ? <data.icon /> : null}
        {data?.title}
      </h5>
      <ul className="mt-3">
        {data?.data.length ? (
          data?.data.map((item) => (
            <li
              key={item?.id}
              className={cn(
                'pl-3 py-1 border-l flex items-center justify-between group border-line transition hover:border-hover hover:text-hover',
                path == item?.link && 'border-white text-white',
              )}
            >
              <Link
                className="flex items-center gap-2  text-sm "
                to={item?.link}
                onClick={() => clickLink(item?.title, item?.icon)}
              >
                <item.icon width={18} />
                {item?.title}
              </Link>
              <ChevronRight
                className={cn(
                  'opacity-0 transition group-hover:opacity-90',
                  path == item?.link && 'opacity-100',
                )}
                width={18}
              />
            </li>
          ))
        ) : (
          <h1>Ничего не найдено</h1>
        )}
      </ul>
    </div>
  )
}

export default SectionItem
