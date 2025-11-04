import React, { useMemo, useState, useEffect, useRef } from 'react'
import Container from '../Container/Container'
import { Link, useNavigate } from 'react-router'
import { SECTION_ALL, SECTIONS_LOADING, SECTIONS_DOWNLOAD } from '../../data/Links.data'
import { version } from '../../../package.json'

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-50 border-b border-[#2b3250] bg-[#0f1422]/70 backdrop-blur-md text-main">
      <Container classname={'flex items-center justify-between gap-3 py-2'}>
        <Link to="/" className="inline-flex items-center">
          <img
            src="/logo.webp"
            alt="logo"
            className="h-10 w-auto transition duration-200 hover:brightness-110"
          />
        </Link>

        <HeaderSearch />

        <span className="inline-flex items-center rounded-full border border-[#2b3250] bg-[#131827] px-2.5 py-1 font-mono text-xs md:text-sm text-[#aab4d4]">
          v{version}
        </span>
      </Container>
    </div>
  )
}

const HeaderSearch = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  const items = useMemo(() => {
    const sections = [SECTION_ALL, SECTIONS_LOADING, SECTIONS_DOWNLOAD]
    const derived = sections.flatMap((section) =>
      (section?.data || []).map((item) => ({
        title: item.title,
        path: item.link,
        section: section.title,
      })),
    )
    if (!derived.some((i) => i.path === '/')) {
      derived.unshift({ title: 'Главная', path: '/', section: 'Навигация' })
    }
    return derived
  }, [])

  const results = useMemo(() => {
    const norm = (s) => (s || '').toString().toLowerCase()
    const q = norm(query).trim()
    if (!q) return []
    const tokens = q.split(/\s+/).filter(Boolean)

    const scoreItem = (it) => {
      const title = norm(it.title)
      const section = norm(it.section)
      let score = 0
      for (const t of tokens) {
        if (title.startsWith(t)) score += 4
        else if (title.includes(t)) score += 3
        if (section.startsWith(t)) score += 2
        else if (section.includes(t)) score += 1
      }
      return score
    }

    const scored = items
      .map((it) => ({ ...it, _score: scoreItem(it) }))
      .filter((it) => it._score > 0)
      .sort((a, b) => {
        if (b._score !== a._score) return b._score - a._score
        return a.title.length - b.title.length
      })

    // Удалим дубликаты по пути, оставив самый релевантный (после сортировки)
    const seen = new Set()
    const deduped = []
    for (const it of scored) {
      if (seen.has(it.path)) continue
      seen.add(it.path)
      deduped.push(it)
    }

    return deduped.slice(0, 10)
  }, [items, query])

  useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const onKeyDown = (e) => {
    if (e.key === 'Escape') setOpen(false)
    if (e.key === 'Enter') {
      if (results[0]) {
        navigate(results[0].path)
        setOpen(false)
        setQuery('')
      }
    }
  }

  return (
    <div ref={containerRef} className="relative hidden md:block w-64">
      <div className="flex items-center rounded-md border border-[#2b3250] bg-[#131827] px-2 focus-within:border-[#6744df]">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(!!query)}
          onKeyDown={onKeyDown}
          placeholder="Быстрый поиск…"
          className="w-full bg-transparent py-1.5 text-sm text-[#e3e8ff] placeholder:text-[#8190bf] focus:outline-none"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 z-50 mt-1 rounded-md border border-[#2b3250] bg-[#0f1422]/95 backdrop-blur-md shadow-lg">
          <ul className="py-1 text-sm">
            {results.map((it) => (
              <li key={`${it.section}-${it.path}`}>
                <button
                  className="w-full text-left px-3 py-2 cursor-pointer hover:bg-[#131827] text-[#e3e8ff]"
                  onClick={() => {
                    navigate(it.path)
                    setOpen(false)
                    setQuery('')
                  }}
                >
                  <div className="flex flex-col">
                    <span>{it.title}</span>
                    {it.section && <span className="text-xs text-[#8190bf]">{it.section}</span>}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {open && query && results.length === 0 && (
        <div className="absolute left-0 right-0 z-50 mt-1 rounded-md border border-[#2b3250] bg-[#0f1422]/95 backdrop-blur-md shadow-lg px-3 py-2 text-sm text-[#aab4d4]">
          Ничего не найдено
        </div>
      )}
    </div>
  )
}

export default Header
