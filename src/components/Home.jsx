import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faHelmetSafety, faListCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"


export default function Home() {

    const [t] = useTranslation("global")
    console.log("P")

    return (
        <main className="bgmi">
            <header className="header-color">
                <div className="header-texto container">
                    <h1 className="text-white texto mb-4">{t("home.title1")} <br />
                        {t("home.title2")}
                    </h1>
                    <Link to="/contact" className="btn btn-light boton">
                        {t("home.button")}
                    </Link>
                    <p className="mt-3 text-white">{t("home.infoFree")}</p>

                </div>
            </header>

            <section className="container my-5">
                <div className="row">
                    <img src="../../img/first-port.webp" className="col-12 col-md-5 order-2 order-md-1" alt="img-principal" />

                    <div className="d-flex flex-column justify-content-center align-items-center col-12 col-md-7 order-1 order-md-2 margs">
                        <h2 className="mb-5 text-center fw-bold fs-1">
                            {t("home.subtitle")}
                        </h2>
                        <p className="center mx-auto mt-3 text-center">{t("home.infoSubtitle")}</p>

                        <Link to="/contact" className="btn btn-contact ">
                            {t("home.button")}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container text-center m-extra">
                <div className="row">

                    <h2 className="mb-5 fw-bold fs-1">{t("home.whyChoose")}</h2>
                    <div className="col-12 col-md-4 color-choose">
                        <h3>{t("home.answer1")}</h3>
                        <p className="text-dark fw-light fs-6 mt-3">{t("home.answer1Large")}</p>
                        <FontAwesomeIcon className="fa-7x my-5 text-dark" icon={faHelmetSafety} />
                    </div>
                    <div className="col-12 col-md-4 color-choose">
                        <h3>{t("home.answer2")}</h3>
                        <p className="text-dark fw-light fs-6 mt-3">{t("home.answer2Large")}</p>
                        <FontAwesomeIcon className="fa-7x my-5 text-dark" icon={faGraduationCap} />
                    </div>
                    <div className="col-12 col-md-4 color-choose">
                        <h3>{t("home.answer3")}</h3>
                        <p className="text-dark fw-light fs-6 mt-3">{t("home.answer3Large")}</p>
                        <FontAwesomeIcon className="fa-7x my-5 text-dark" icon={faListCheck} />
                    </div>
                </div>
            </section>


            <section className="container text-center pb-5">
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
                </div>

                <Link to="/services" className="btn btn-contact mt-4">{t("home.buttonServices")}</Link>

            </section>
        </main>
    )
}

{/* <img src="../../public/img/first-port.jpeg" className="col-12 col-md-6 mb-4 mb-md-0" alt="" /> */ }
