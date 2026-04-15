import React from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import styles from "../../../styles/ImgZen/privacy.module.css";

export default function ImgZenPrivacy() {
    return (
        <>
            <Head>
                {generateNextSeo({
                    title: "Datenschutzerklärung – ImgZen",
                    description:
                        "Datenschutzerklärung für ImgZen von Andreas Link. ImgZen erhebt, speichert oder verarbeitet keine personenbezogenen Daten.",
                    canonical: "https://www.linkandreas.de/imgzen/privacy/de",
                    openGraph: {
                        url: "https://www.linkandreas.de/imgzen/privacy/de",
                        title: "Datenschutzerklärung – ImgZen",
                        description: "Datenschutzerklärung für ImgZen von Andreas Link.",
                        siteName: "Andreas Link",
                    },
                })}
            </Head>

            <div className={styles.container}>
                <h1>Datenschutzerklärung – ImgZen</h1>
                <p>
                    <strong>Gültig ab:</strong> 15. April 2026
                </p>

                <p>
                    ImgZen wird von <strong>Andreas Link</strong> entwickelt und betrieben
                    (nachfolgend „wir“).
                </p>

                <p>
                    Der Schutz Ihrer Daten ist uns wichtig. Diese Datenschutzerklärung
                    erläutert, wie ImgZen mit Informationen umgeht – im Einklang mit der
                    Datenschutz-Grundverordnung (DSGVO / GDPR).
                </p>

                <h2>1. Keine Erhebung personenbezogener Daten</h2>
                <p>
                    ImgZen <strong>erhebt, speichert oder verarbeitet keinerlei
                        personenbezogene Daten</strong> im Sinne von Art. 4 DSGVO.
                </p>
                <ul>
                    <li>Es werden keine persönlichen Informationen abgefragt oder benötigt</li>
                    <li>Es werden keine Analyse-, Tracking- oder Profiling-Tools eingesetzt</li>
                    <li>Es findet keine Übermittlung von Daten an externe Server statt</li>
                </ul>

                <h2>2. Lokale Verarbeitung auf Ihrem Gerät</h2>
                <p>
                    Die gesamte Bildverarbeitung erfolgt <strong>ausschließlich lokal auf
                        Ihrem Gerät</strong>. Ihre Dateien werden weder übertragen noch extern
                    gespeichert.
                </p>

                <h2>3. Rechtsgrundlage (Art. 6 DSGVO)</h2>
                <p>
                    Da keine personenbezogenen Daten verarbeitet werden, ist keine
                    Rechtsgrundlage gemäß Art. 6 DSGVO erforderlich.
                </p>

                <h2>4. Weitergabe von Daten an Dritte</h2>
                <p>
                    ImgZen <strong>gibt keine Daten an Dritte weiter</strong> und nutzt
                    keine externen Dienste, die personenbezogene Daten verarbeiten.
                </p>

                <h2>5. Übermittlung in Drittländer</h2>
                <p>
                    Es werden keinerlei Daten in Länder außerhalb des Europäischen
                    Wirtschaftsraums (EWR) übermittelt.
                </p>

                <h2>6. Rechte betroffener Personen (Art. 15–22 DSGVO)</h2>
                <p>
                    Grundsätzlich haben Sie nach der DSGVO Rechte auf Auskunft,
                    Berichtigung, Löschung, Einschränkung der Verarbeitung,
                    Datenübertragbarkeit und Widerspruch.
                </p>
                <p>
                    Da ImgZen jedoch keine personenbezogenen Daten verarbeitet, können
                    diese Rechte faktisch nicht ausgeübt werden.
                </p>

                <h2>7. Beschwerderecht (Art. 77 DSGVO)</h2>
                <p>
                    Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
                    beschweren, wenn Sie der Ansicht sind, dass eine Verarbeitung
                    personenbezogener Daten gegen die DSGVO verstößt.
                </p>

                <h2>8. Datenschutz von Kindern</h2>
                <p>
                    ImgZen erhebt wissentlich keinerlei Daten von Personen – auch nicht
                    von Kindern.
                </p>

                <h2>9. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                    Diese Datenschutzerklärung kann zukünftig aktualisiert werden.
                    Änderungen werden auf dieser Seite veröffentlicht.
                </p>

                <h2>10. Kontakt</h2>
                <p>
                    Bei Fragen zu dieser Datenschutzerklärung oder zum Datenschutz können
                    Sie uns kontaktieren:
                </p>
                <p>
                    <strong>Andreas Link</strong>
                    <br />
                    E-Mail:{" "}
                    <a href="mailto:imgzen@linkandreas.de">imgzen@linkandreas.de</a>
                </p>

                <footer className={styles.footer}>
                    &copy; 2026 ImgZen. Alle Rechte vorbehalten.
                </footer>
            </div>
        </>
    );
}

ImgZenPrivacy.getLayout = (page) => page;