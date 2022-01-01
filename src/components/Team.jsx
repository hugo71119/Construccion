import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Team() {
    const [t] = useTranslation("global");

    return (
        <>
            <p className="fw-bold fs-2">{t("contact.subtitle")}</p>
            <p>{t("contact.district")}</p>
            <ul>
                <li className="text-decoration-none me-4">{t("contact.person1")}</li>
                <li>{t("contact.person2")}</li>
                <li>{t("contact.person3")}</li>
            </ul>
        </>
    )
}
