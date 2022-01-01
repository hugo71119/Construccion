import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Bathroom() {

  const [t] = useTranslation("global")
  const array = [
    "../../img/pool1.webp",
    "../../img/pool2.webp",
    "../../img/pool3.webp",
    "../../img/pool5.webp",
    "../../img/pool6.webp",
    "../../img/pool4.webp",
  ]

  return (
    <section className="bgmi">
      <div className="container">
        <div className="row">
          <h2 className="text-center fw-bolder fs-1 my-5">{t("home.service5")}</h2>

          <div className="mb-5">
          {array.map(imagen => (
              <img key={imagen}  className="col-12 col-md-4 mb-4 mb-md-0 p-md-2" src={imagen} alt="pic-pool" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
