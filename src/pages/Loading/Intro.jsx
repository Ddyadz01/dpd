import React from 'react'

const Intro = () => {
  return (
    <div className="mt-3 text-sm md:text-base leading-relaxed space-y-3">
      <div className="mt-3 rounded-lg border border-[#2b3250] bg-[#0f1422]/70 px-3 py-3 text-sm md:text-base">
        <p>
          Этот раздел посвящён <b>правильной работе по манифесту выхода</b>: что проверять и с чего
          начинать перед отправкой, а также работе с почтой, межгородом, <b>АРГИС</b> (корпоративное
          ПО), отчётами, актами и товарно-транспортными накладными.
        </p>
      </div>
      <p>Коротко о работе в этом разделе:</p>
      <ul className="ml-5 list-disc space-y-2">
        <li>С чего начать: проверка манифеста выхода и транспортного средства.</li>
        <li>Что проверять: прицеп, пломбы, документы и упаковку груза.</li>
        <li>Процессы: почта, межгород, АРГИС, отчёты, акты, ТТН.</li>
      </ul>
    </div>
  )
}

export default Intro
