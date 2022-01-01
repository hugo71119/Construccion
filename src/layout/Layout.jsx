import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom';
import { useTranslation } from "react-i18next"
import '../App.css'

export default function Layout() {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Navbar className="green" expand="lg">
                <Container>
                <Link to="/">
                    <img
                    src="../../img/logoPNG1.webp"
                    width="250"
                    height="80"
                    className="d-inline-block align-top"
                    alt="Logo"
                    />
                </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">{t("nav.option1")}</Link>
                            <Link className="nav-link" to="/services">{t("nav.option2")}</Link>
                            <Link className="nav-link" to="/about">{t("nav.option3")}</Link>
                            <Link className="nav-link" to="/contact">{t("nav.option4")}</Link>
                            <NavDropdown title={t("nav.language")} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={ () => i18n.changeLanguage("es")}>{t("nav.optionLenguage.spanish")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={ () => i18n.changeLanguage("pt")}>
                                {t("nav.optionLenguage.portuguese")}
                    </NavDropdown.Item>
                                <NavDropdown.Item onClick={ () => i18n.changeLanguage("en")}>{t("nav.optionLenguage.english")}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet/>
        </>
    )
}
