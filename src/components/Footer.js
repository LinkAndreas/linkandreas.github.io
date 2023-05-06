import React from "react";
import NavLink from "./NavLink.js";
import PrivacyPolicy from "../components/PrivacyPolicy";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made by{" "}
        <NavLink className="inline" href="https://linkandreas.de/about">
          Andreas Link
        </NavLink>{" "}
        in Karlsruhe
      </p>

      <div>
        <PrivacyPolicy />
      </div>
    </footer>
  );
}
