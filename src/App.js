import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Routes from "./routes/routes.js";
import Footer from "./components/Footer.js";

import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
