import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Articles from "./Articles.js";
import Licenses from "./Licenses.js";
import Timity from "./Timity.js";
import Publications from "./Publications.js";
import About from "./About.js";
import "../styles/Content.css";

export default function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate replace to="/articles" />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/timity" element={<Timity />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
