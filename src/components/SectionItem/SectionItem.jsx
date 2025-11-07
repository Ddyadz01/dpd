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
    <div className="mt-4 first:mt-0">
      <h5 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted flex items-center gap-2">
        {data?.icon ? <data.icon /> : null}
        {data?.title}
      </h5>
      <ul className="mt-2 space-y-1.5">
        {data?.data.length ? (
          data?.data.map((item) => (
            <li
              key={item?.id}
              className={cn(
                'flex items-center justify-between group transition rounded-xl px-3 py-2 text-sm text-text-muted mr-1',
                path == item?.link
                  ? 'bg-accent-primary text-white  shadow-md'
                  : 'hover:bg-[#dbdbdb] hover:text-text-contrast',
              )}
            >
              <Link
                className={cn(
                  'flex items-center gap-2 flex-1',
                  path == item?.link
                    ? 'font-semibold text-white'
                    : 'font-medium text-text-muted group-hover:text-text-contrast',
                )}
                to={item?.link}
                onClick={() => clickLink(item?.title, item?.icon)}
              >
                <item.icon
                  width={18}
                  className={cn(
                    'transition-colors',
                    path == item?.link
                      ? 'text-white'
                      : 'text-text-muted group-hover:text-text-contrast',
                  )}
                />
                {item?.title}
              </Link>
              <ChevronRight
                className={cn(
                  'opacity-0 transition group-hover:opacity-60 text-text-muted group-hover:text-text-contrast',
                  path == item?.link && 'opacity-100 text-white group-hover:text-white',
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
