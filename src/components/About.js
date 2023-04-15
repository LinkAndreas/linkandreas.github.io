import React from "react";
import Metadata from "./Metadata";
import Avatar from "../components/Avatar.js";
import "../styles/About.css";

import academicIcon from "../../assets/images/about/academic.png";
import companyIcon from "../../assets/images/about/company.png";
import BibliographyEntry from "./BibliographyEntry";

class About extends React.Component {
  render() {
    return (
      <div className="aboutContainer">
        <Metadata
          title='About - Andreas Link'
          children={
            <div className="aboutContent">
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
          }
        />
      </div >
    );
  }
}

export default About;
