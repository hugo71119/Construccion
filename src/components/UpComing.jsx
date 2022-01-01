import { useTranslation } from "react-i18next";


export default function UpComing() {
  const [t] = useTranslation("global");

  return (
    <>
      <p className="fw-bold fs-4">{t("contact.upcoming-openings-title")}</p>
      <p className="fw-bold">-- {t("contact.upcoming-openings")} --</p>
    </>
  )
}
