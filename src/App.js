import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter className="appRouter" forceRefresh={true}>
      <div className="appContainer">
        <NavBar />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
