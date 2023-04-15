import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import NavBar from "./components/NavBar.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/App.css";

const helmetContext = {};
const App = () => {
  return (
    <HelmetProvider helmetContext={helmetContext}>
      <HashRouter className="appRouter" forceRefresh={false}>
        <div className="appContainer">
          <NavBar />
          <Content />
          <Footer />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
};

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

if (typeof window !== "undefined") {
  root.render(<App />);
}
