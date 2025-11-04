import { create } from 'zustand'

export const useStore = create((set) => ({
  path: null,
  pathTitle: null,
  pathIcon: null,
  searchValue: '',
  changePath: (path) => set(() => ({ path: path })),
  changePathTitle: (title, icon) => set(() => ({ pathTitle: title, pathIcon: icon })),
  changeSearchValue: (value) => set(() => ({ searchValue: value })),
}))
