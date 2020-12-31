import React from "react";
import "../styles/Licenses.css";
import AppInfo from "./AppInfo.js";
import MacAppStoreBadge from "./MacAppStoreBadge.js";
import Feature from "./Feature.js";
import FeatureGrid from "./FeatureGrid.js";
import AppleLegalNotes from "./AppleLegalNotes.js";

/* Images */
import screenshot from "../images/licensesScreenshot.png";
import appIcon from "../images/licensesAppIcon.png";
import eventList from "../images/eventList.png";

export default function Licenses() {
  return (
    <div className="licensesContainer">
      <AppInfo
        title="Licenses"
        subtitle="Spot and export licenses"
        icon={appIcon}
      />
      <img
        className="licensesAppScreenshot"
        src={screenshot}
        alt="Timity on iPhone and iPad"
      />
      <MacAppStoreBadge url="https://apps.apple.com/us/app/licenses/id1545822966" />
      <FeatureGrid>
        <Feature
          title="Event List"
          subtitle="Keep track of your most important events."
          icon={eventList}
          alt="Event List"
        />
        <Feature
          title="Event List"
          subtitle="Keep track of your most important events."
          icon={eventList}
          alt="Event List"
        />
        <Feature
          title="Event List"
          subtitle="Keep track of your most important events."
          icon={eventList}
          alt="Event List"
        />
      </FeatureGrid>
      <AppleLegalNotes />
    </div>
  );
}
