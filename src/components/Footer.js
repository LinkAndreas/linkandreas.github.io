import React from "react";
import { NavLink } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Made by{" "}
        <NavLink className="inline" to="/about">
          Andreas Link
        </NavLink>{" "}
        in Karlsruhe
      </p>

      <p>
        <PrivacyPolicy />
      </p>
    </footer>
  );
}
