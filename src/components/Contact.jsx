import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import Team from './Team';
import UpComing from './UpComing';

export default function Contact() {

  const [t] = useTranslation("global");


  return (
    <section className="pb-5 bgmi">
      <div className="container">
        <h2 className="text-center fs-1 fw-bolder pt-4">{t("contact.title")}</h2>
        <div className="row mt-5">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            
            { t("contact.subtitle") ?
              <Team/> :
              ''
            }

            { t("contact.upcoming-openings") ? 
              <UpComing/> :
              ''
            }
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex align-items-center mt-3 mb-5">
              <FontAwesomeIcon className="fa-xl text-dark" icon={faEnvelope} />
              <Link to={`mailto:${t("contact.mail")}`} className="text-decoration-none text-dark mx-4 mb-0">{t("contact.mail")}</Link>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center mb-2">
                { t("contact.phone1") ? <FontAwesomeIcon className="fa-xl text-dark" icon={faPhone} /> : '' }
                <p className="mx-4 mb-0 text-dark">{t("contact.phone1")}</p>
              </div>
              <div className="d-flex align-items-center mt-4">
                { t("contact.phone2") ? <FontAwesomeIcon className="fa-xl text-dark" icon={faPhone} /> : '' }
                <p className="mx-4 mb-0 text-dark">{t("contact.phone2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
