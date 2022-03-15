import React from "react";
import "../styles/About.css";
import Avatar from "../components/Avatar.js";

import academicIcon from "../../assets/images/about/academic.png";
import companyIcon from "../../assets/images/about/company.png";
import BibliographyEntry from "./BibliographyEntry";

class About extends React.Component {
  render() {
    return (
      <div className="aboutContainer">
        <Avatar />
        <div className="biography">
          <BibliographyEntry
            icon={companyIcon}
            alt="company"
            title="Senior Software Engineer"
            subtitle="at adesso mobile solutions GmbH, Germany"
          />
          <BibliographyEntry
            icon={academicIcon}
            alt="master"
            title="Master of Science (M.Sc. RWTH)"
            subtitle="at RWTH Aachen University, Germany"
          />
          <BibliographyEntry
            icon={academicIcon}
            alt="bachelor"
            title="Bachelor of Science (B.Sc. RWTH)"
            subtitle="at RWTH Aachen University, Germany"
          />
        </div>
      </div>
    );
  }
}

export default About;
