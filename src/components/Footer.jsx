import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {

  const [t] = useTranslation("global")

  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="fs-1">{t("footer.tell-us")}</p>
            <p>{t("footer.copyright")} {new Date().getFullYear()} ©</p>
          </div>
          <div className="col-12 col-md-6">

            <div className="d-flex align-items-center mt-3 mb-5 text-white">
              <FontAwesomeIcon className="fa-xl " icon={faEnvelope} />
              <Link to={`mailto:${t("contact.mail")}`} className="text-decoration-none mx-4 mb-0 text-white">{t("contact.mail")}</Link>
            </div>

            <div className="d-flex flex-column align-items-start justify-content-center">
              <div className="d-flex align-items-center mb-2">
                { t("contact.phone1") ? <FontAwesomeIcon className="fa-xl text-white" icon={faPhone} /> : '' }
                <p className="mx-4 mb-0 text-white">{t("contact.phone1")}</p>
              </div>
              <div className="d-flex align-items-center mt-4">
                { t("contact.phone2") ? <FontAwesomeIcon className="fa-xl text-white" icon={faPhone} /> : '' }
                <p className="mx-4 mb-0 text-white">{t("contact.phone2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
