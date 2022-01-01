import { useTranslation } from "react-i18next"


export default function Interiors() {

  const [t] = useTranslation("global")
  const array = [
    "../../img/interior1.webp",
    "../../img/interior8.webp",
    "../../img/interior3.webp",
    "../../img/interior6.webp",
    "../../img/interior5.webp",
    "../../img/interior7.webp",
    "../../img/interior2.webp",
    "../../img/interior9.webp",
    "../../img/interior10.webp",
    "../../img/interior4.webp",
    "../../img/interior11.webp",
  ]

  return (
    <section className="bgmi">
      <div className="container">
        <div className="row">
          <h2 className="text-center fw-bolder fs-1 my-5">{t("home.service3")}</h2>

          <div className="mb-5">
          {array.map(imagen => (
              <img key={imagen} className="col-12 col-md-4 mb-4 mb-md-0 p-md-2" src={imagen} alt="pic-interiors" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
