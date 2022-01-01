import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Project() {

  const [t] = useTranslation("global");

  return (
    <section className="bgmi">

      <div className="container text-center pb-5">
        <div className="row">
          <h2 className="mb-5 fw-bold fs-1">{t("home.servicestitle")}</h2>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="img-1">
              <div className="text-img">
                <Link to="/kitchen" className="text-white fs-3 text-decoration-none fw-bold">{t("home.service1")}</Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="img-2">
              <div className="text-img">
                <Link to="/bathroom" className="text-white fs-3 text-decoration-none fw-bold">{t("home.service2")}</Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="img-3">
              <div className="text-img">
                <Link to="/interiors" className="text-white fs-3 text-decoration-none fw-bold">{t("home.service3")}</Link>
              </div>
            </div>
          </div>
          

          <div className="col-12 col-md-4 mb-4 mb-md-0 mt-md-4 mx-auto">
            <div className="img-4">
              <div className="text-img">
                <Link to="/gril-paver" className="text-white fs-3 text-decoration-none fw-bold">{t("home.service4")}</Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0 mt-md-4 mx-auto">
            <div className="img-5">
              <div className="text-img">
                <Link to="/pool" className="text-white fs-3 text-decoration-none fw-bold">{t("home.service5")}</Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
