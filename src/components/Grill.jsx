import { useTranslation } from "react-i18next"

export default function Grill() {

  const [t] = useTranslation("global")
  const array = [
    "../../img/grill1.webp",
    "../../img/grill2.webp",
    "../../img/grill9.webp",
    "../../img/grill4.webp",
    "../../img/grill5.webp",
    "../../img/grill6.webp",
    "../../img/grill7.webp",
    "../../img/grill8.webp",
    "../../img/grill3.webp",
    "../../img/grill10.webp",
    "../../img/grill11.webp",
    "../../img/grill12.webp",
    "../../img/grill13.webp",
    "../../img/grill14.webp",
    "../../img/grill15.webp",
    "../../img/grill16.webp",
    "../../img/grill17.webp"
  ]

  return (
    <section className="bgmi">
      <div className="container">
        <div className="row">
          <h2 className="text-center fw-bolder fs-1 my-5">{t("home.service4")}</h2>

          <div className="mb-5">
            {array.map(imagen => (
              <img key={imagen}  className="col-12 col-md-4 mb-4 mb-md-0 p-md-2" src={imagen} alt="pic-grill-paver" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
