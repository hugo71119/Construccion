import { useTranslation } from "react-i18next"


export default function About() {

  const [t] = useTranslation("global") 

  return (
    <section className="bgmi pt-5">
      <div className="container">
        <div className="row mb-5">
          <img className="col-12 col-lg-5 order-2 order-lg-1" src="../../img/about1.webp" alt="pic-about-pool" />
          <div className="col-12 col-lg-7 order-1 order-lg-2 d-lg-flex flex-column justify-content-center ">
            <h2 className="text-center fw-bold fs-1">{t("about.title")}</h2>
            <p className="mt-4 text-center center mx-auto fw-light">{t("about.bodyPrincipal")}</p>
          </div>

          

        </div>
        <div className="row pb-5">
          <div className="col-12 col-lg-7 order-1 order-lg-1 d-lg-flex flex-column justify-content-center ">
            <h3 className="text-center fw-bolder fs-2">{t("about.startTitle")}</h3>
            <p className="mt-4 text-center center mx-auto fw-light">{t("about.start")}</p>
          </div>
          <img className="col-12 col-lg-5 order-2 order-lg-2" src="../../img/about2.webp" alt="pic-about-garden" />
        </div>
      </div>
      
    </section>
  )
}
