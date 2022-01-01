import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Bathroom() {

  const [t] = useTranslation("global")
  const array = [
    "../../img/bathroom1.webp",
    "../../img/bathroom2.webp",
    "../../img/bathroom5.webp",
    "../../img/bathroom7.webp",
    "../../img/bathroom8.webp",
    "../../img/bathroom9.webp",
    "../../img/bathroom3.webp",
    "../../img/bathroom4.jpg",
    "../../img/bathroom6.webp",
    "../../img/bathroom10.webp",
    "../../img/bathroom11.webp",
    "../../img/bathroom12.webp",
    "../../img/bathroom13.webp",
  ]

  return (
    <section className="bgmi">
      <div className="container">
        <div className="row">
          <h2 className="text-center fw-bolder fs-1 my-5">{t("home.service2")}</h2>

          <div className="mb-5">
          {array.map(imagen => (
              <img key={imagen} className="col-12 col-md-4 mb-4 mb-md-0 p-md-2" src={imagen} alt="pic-bathroom" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
