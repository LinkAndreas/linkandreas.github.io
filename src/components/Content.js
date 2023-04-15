import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Articles from "./Articles.js";
import Licenses from "./Licenses.js";
import Timity from "./Timity.js";
import Publications from "./Publications.js";
import About from "./About.js";
import Metadata from "./Metadata.js";
import "../styles/Content.css";

export default function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate replace to="/articles" />} />
        <Route path="/articles/*" element={
          <Metadata
            title='Articles - Andreas Link'
            children={<Articles />} />
        } />
        <Route path="/licenses" element={
          <Metadata
            title='Licenses - Andreas Link'
            description='Spot and export licenses'
            children={<Licenses />} />
        } />
        <Route path="/timity" element={
          <Metadata
            title='Timity - Andreas Link'
            description='The missing Time Calculator'
            children={<Timity />} />
        } />
        <Route path="/publications" element={
          <Metadata
            title='Publications - Andreas Link'
            children={<Publications />} />
        } />
        <Route path="/about" element={
          <Metadata
            title='About - Andreas Link'
            children={<About />} />
        } />
      </Routes>
    </div>
  );
}
