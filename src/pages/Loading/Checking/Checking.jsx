import React from 'react'
import TextHeading from '../../../components/TextHeading/textHeading'
import { ImageContainer } from '../../../components/ImageContainer/ImageContainer'

const Checking = () => {
  return (
    <div>
      <div className="mt-6 rounded-xl  space-y-3 text-sm md:text-base leading-relaxed">
        <p>
          Каждое транспортное средство
          <b>
            <i> должно быть проверено перед загрузкой </i>
          </b>
          во избежание порчи груза и нарушения габаритов во время транспортировки.
        </p>
        <p className="mt-4">
          Есть несколько типов прицепов, предназначенных для транспортировки груза:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Тентованные</li>
          <li>Рефрижератор</li>
          <li>Контейнер</li>
        </ul>
      </div>

      <div className="mt-5 text-sm md:text-base leading-relaxed">
        <TextHeading text={'Тентованные'} />
        <p className="mt-2">
          Тентованный прицеп (штора) — универсальный вариант для паллет, коробок и стройматериалов,
          не требующих поддержания температуры. Тент защищает груз от осадков и грязи, а каркас и
          растяжки — от потери формы.
        </p>
        {/* <img src="" alt="Тентованный прицеп" className="w-100 " /> */}
        <ImageContainer
          imageUrl={'/priceps/tent.webp'}
          alt="Тентованный прицеп"
          classname={'h-[300px]'}
        />
        <p className="mt-4 font-medium">Что проверять:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            Наличие и правильную установку всех ребер жёсткости/стойких планок, чтобы исключить
            нарушение габаритов при возможной просадке груза на бок.
          </li>
          <li>Отсутствие дыр, порезов и протираний тента; целостность ремней и креплений.</li>
          <li>Исправность боковых штор, замков и герметичность при закрытии.</li>
          <li>Целостность тросов для опломбировки и исправность точек крепления пломбы.</li>
        </ul>
      </div>
      <div className="mt-5 text-sm md:text-base leading-relaxed">
        <TextHeading text={'Рефрижератор'} />
        <p className="mt-2">
          Рефрижератор — прицеп с холодильной установкой для грузов, требующих температурный режим
          (жидкости, например краски, а также косметика). Поддерживает заданные значения в
          зависимости от требований к грузу.
        </p>
        <ImageContainer
          imageUrl={'/priceps/ref.png'}
          alt="Терморежимный прицеп"
          classname={'h-[300px]'}
        />
        <p className="mt-4 font-medium">Что проверять:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            Работу холодильной установки и способность поддерживать заданный режим (как правило, от
            +5°C до +23°C в зависимости от груза).
          </li>
          <li>Чистоту кузова и отсутствие посторонних запахов в грузовом отсеке.</li>
          <li>Целостность дверных уплотнителей, исправность датчиков/терморегистратора.</li>
        </ul>
      </div>
      <div className="mt-5 text-sm md:text-base leading-relaxed">
        <TextHeading text={'Контейнер'} />
        <p className="mt-2">
          Контейнер (сухогрузный или изотермический) — удобен для мультимодальных перевозок,
          пломбирования и длительного хранения при перегрузках.
        </p>
        <p className="mt-4 font-medium">Что проверять:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Целостность корпуса, пола и крыши; отсутствие протечек и сквозной коррозии.</li>
          <li>Исправность дверей, петель, уплотнителей и запорных устройств.</li>
          <li>Чистоту внутри, отсутствие запахов и остатков предыдущего груза.</li>
        </ul>
      </div>
    </div>
  )
}

export default Checking
