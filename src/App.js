import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";

const App = () => {
  return (
    <HashRouter className="appRouter" forceRefresh={false}>
      <div className="appContainer">
        <NavBar />
        <Content />
        <Footer />
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
