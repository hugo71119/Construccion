import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Kitchen() {

  const [t] = useTranslation("global")

  const array = [
    "../../img/kitchen1.webp",
    "../../img/kitchen2.webp",
    "../../img/kitchen3.webp",
    "../../img/kitchen4.webp",
    "../../img/kitchen5.webp",
    "../../img/kitchen6.webp",
  ]

  return (
    <section className="bgmi">
      <div className="container">
        <div className="row">
          <h2 className="text-center fw-bolder fs-1 my-5">{t("home.service1")}</h2>

          <div className="mb-5">
            {array.map(imagen => (
              <img key={imagen}  className="col-12 col-md-4 mb-4 mb-md-0 p-md-2" src={imagen} alt="pic-kitchen" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
