import React from "react";
import "../styles/LinkedInBadge.css";

export default function LinkedInBadge() {
  return (
    <div className="linkedInBadgeContainer">
      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="large"
        data-locale="en_US"
        data-type="horizontal"
        data-theme="dark"
        data-vanity="linkandreas"
      >
        <a
          className="LI-simple-link"
          href="https://de.linkedin.com/in/linkandreas?trk=profile-badge"
        >
          Andreas Link
        </a>
      </div>
    </div>
  );
}
