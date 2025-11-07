import React from 'react'
import { TitleMedium } from '../../../components/TitleMedium/TitleMedium'

export const DriverCheck = () => {
  return (
    <div>
      <TitleMedium text={'Проверка водителей'} />
      <p>
        При подготовке к рейсу необходимо убедиться, что документы водителя и транспортного средства
        соответствуют данным в АРГИС.
        <br />
        Проверка выполняется следующим образом:
      </p>

      <ul className="list-inside">
        <li className="list-decimal">
          <b>Проверка документов</b>
          <ul className="list-inside">
            <li className="list-disc ml-4">Паспорт водителя (2–3 страницы)</li>
            <li className="list-disc ml-4">
              Свидетельство о регистрации транспортного средства (СТС) тягача с обеих сторон;
            </li>
            <li className="list-disc ml-4">Водительское удостоверение с обеих сторон;</li>
            <li className="list-disc ml-4">
              Согласие водителя на обработку персональных данных (должно быть заполнено).
            </li>
          </ul>
        </li>
        <li className="list-decimal">
          <b>Сканы документов</b>
          <ul className="list-inside">
            <li className="list-disc ml-4">
              Для всех указанных документов необходимо сделать сканы и подготовить их для отправки
              на проверку.
            </li>
          </ul>
        </li>
        <li className="list-decimal">
          <b>Отправка на проверку</b>
          <ul className="list-inside">
            <li className="list-disc ml-4">Кому: interurban, security_drivers</li>
            <li className="list-disc ml-4">Копия: moi_manifest, moi_head, moi_command</li>
            <li className="list-disc ml-4">
              Все сканы прикрепляются к письму, которое отправляется в соответствующий отдел для
              проверки.
            </li>
            <li className="list-disc ml-4">
              Тема письма должна содержать направление города и текст «водитель на проверку».
              Пример:
              <i>
                <u> LED - водитель на проверку </u>
              </i>
            </li>
            <li className="list-disc ml-4">
              В тексте письма необходимо указать:
              <ul>
                <li className="list-disc ml-8">ФИО водителя;</li>
                <li className="list-disc ml-8">Перевозчика (транспортную компанию);</li>
                <li className="list-disc ml-8">Рейс (например, MOI-LED).</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="list-decimal">
          <b>Результат проверки</b>
          <ul className="list-inside">
            <li className="list-disc ml-4">
              После отправки письма необходимо дождаться подтверждения от службы безопасности или
              Interurban о том, что водитель прошёл проверку.
            </li>
          </ul>
        </li>

        <li className="list-decimal">
          <b>При отказе службы безопасности:</b>
          <ul className="list-inside">
            <li className="list-disc ml-4">Не загружать транспортное средство без согласования.</li>
            <li className="list-disc ml-4">
              Дождаться решения о замене водителя или других дальнейших действий от Interurban или
              СБ.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
