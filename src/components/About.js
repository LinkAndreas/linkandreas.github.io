import React from "react";
import "../styles/About.css";
import LinkedInBadge from "../components/LinkedInBadge.js";
import XingBadge from "../components/XingBadge.js";

class About extends React.Component {
  render() {
    return (
      <div className="aboutContainer">
        <div className="socialMedia">
          <LinkedInBadge></LinkedInBadge>
          <XingBadge></XingBadge>
        </div>
      </div>
    );
  }
}

export default About;
