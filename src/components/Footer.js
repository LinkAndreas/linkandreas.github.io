import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Made by{" "}
        <NavLink className="inline timityOrange" to="/about">
          Andreas Link
        </NavLink>{" "}
        in Karlsruhe
      </p>
    </footer>
  );
}
