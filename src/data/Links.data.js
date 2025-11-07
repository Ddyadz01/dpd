import {
  AtSign,
  BadgeCheck,
  Car,
  Download,
  FileStack,
  LayoutGrid,
  Power,
  ReceiptText,
  ScanFace,
  ScrollText,
  Truck,
  Upload,
  VectorSquare,
} from 'lucide-react'

export const SECTION_ALL = {
  title: 'Общие',
  icon: ReceiptText,
  data: [
    {
      id: 1,
      title: 'Справочник по городам',
      link: '/all/citys',
      icon: ScrollText,
    },
    {
      id: 2,
      title: 'Удаленный доступ',
      link: '/all/citys',
      icon: ScrollText,
    },
    {
      id: 3,
      title: 'Услуги компании',
      link: '/all/citys',
      icon: ScrollText,
    },
  ],
}

export const SECTIONS_LOADING = {
  title: 'Манифест выхода (Загрузка)',
  icon: Upload,
  data: [
    {
      id: 1,
      title: 'Начало работы',
      link: '/car-loading',
      icon: Power,
    },
    {
      id: 2,
      title: 'Проверка ТС',
      link: '/car-loading/checking',
      icon: BadgeCheck,
    },
    {
      id: 5,
      title: 'Работа с почтой',
      link: '/car-loading/email',
      icon: AtSign,
    },
    {
      id: 13,
      title: 'Работа с проверками водителей',
      link: '/car-loading/security',
      icon: ScanFace,
    },
    {
      id: 4,
      title: 'Межгород',
      link: '/car-loading/intercity',
      icon: Truck,
    },

    {
      id: 6,
      title: 'Работа в АРГИС',
      link: '/car-loading/argis',
      icon: LayoutGrid,
    },
    {
      id: 7,
      title: 'ТТН и манифест рейса',
      link: '/car-loading/docs',
      icon: FileStack,
    },
    {
      id: 8,
      title: 'Челноки',
      link: '/car-loading/shuttle',
      icon: Car,
    },

    {
      id: 3,
      title: 'Объемы',
      link: '/car-loading/capacity',
      icon: VectorSquare,
    },
    {
      id: 9,
      title: 'Расстановка городов',
      link: '/car-loading/shuttle',
      icon: Car,
    },
    {
      id: 12,
      title: 'Подготовка чек-листов и пломб',
      link: '/car-loading/shuttle',
      icon: Car,
    },
    {
      id: 10,
      title: 'Отчеты',
      link: '/car-loading/shuttle',
      icon: Car,
    },
    {
      id: 11,
      title: 'Акты несоответствия',
      link: '/car-loading/shuttle',
      icon: Car,
    },
  ],
}

export const SECTIONS_DOWNLOAD = {
  title: 'Манифест входа (Выгрузка)',
  icon: Download,
  data: [
    {
      id: 1,
      title: 'Начало работы',
      link: '/car-unloading/start',
      icon: Power,
    },
    {
      id: 2,
      title: 'Проверка документов и пломб',
      link: '/car-unloading/checking-docs',
      icon: BadgeCheck,
    },
    {
      id: 3,
      title: 'Работа в АРГИС',
      link: '/car-unloading/argis',
      icon: LayoutGrid,
    },
    {
      id: 4,
      title: 'Челноки',
      link: '/car-unloading/shuttle',
      icon: Car,
    },
    {
      id: 5,
      title: 'Отчеты',
      link: '/car-unloading/shuttle',
      icon: Car,
    },
    {
      id: 6,
      title: 'Работа с самопривозами',
      link: '/car-unloading/shuttle',
      icon: Car,
    },
    {
      id: 7,
      title: 'ТТН и манифест рейса',
      link: '/car-unloading/docs',
      icon: FileStack,
    },
  ],
}
