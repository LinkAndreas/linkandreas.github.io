import React from "react";
import "../styles/Timity.css";
import AppInfo from "./AppInfo.js";
import AppStoreBadge from "./AppStoreBadge.js";
import Feature from "./Feature.js";
import FeatureGrid from "./FeatureGrid.js";
import AppleLegalNotes from "./AppleLegalNotes.js";

/* Images */
import screenshot from "../images/timityScreenshot.png";
import appIcon from "../images/timityAppIcon.png";
import eventList from "../images/eventList.png";
import timeCalculator from "../images/timeCalculator.png";
import solarCalculator from "../images/solarCalculator.png";
import eventCalculator from "../images/eventCalculator.png";
import settings from "../images/settings.png";
import durationCalculator from "../images/durationCalculator.png";

export default function Timity() {
  return (
    <div className="timityContainer">
      <AppInfo
        title="Timity"
        subtitle="The missing Time Calculator"
        icon={appIcon}
      />
      <img
        className="timityAppScreenshot"
        src={screenshot}
        alt="Timity on iPhone and iPad"
      />
      <AppStoreBadge url="https://apps.apple.com/us/app/timity/id491746507" />
      <FeatureGrid>
        <Feature
          title="Event List"
          subtitle="Keep track of your most important events."
          icon={eventList}
          alt="Event List"
        />
        <Feature
          title="Event Calculator"
          subtitle="Determine the elapsed/remaining time of an event."
          icon={eventCalculator}
          alt="Event Calculator"
        />
        <Feature
          title="Time Calculator"
          subtitle="Add/Subtract date/time components to/from an event."
          icon={timeCalculator}
          alt="Time Calculator"
        />
        <Feature
          title="Duration Calculator"
          subtitle="Determine the duration between two events."
          icon={durationCalculator}
          alt="Duration Calculator"
        />
        <Feature
          title="Solar Calculator"
          subtitle="Determine sunrise/sunset for your current location."
          icon={solarCalculator}
          alt="Solar Calculator"
        />
        <Feature
          title="Settings"
          subtitle="Adapt Timity to your personal preference."
          icon={settings}
          alt="Settings Calculator"
        />
      </FeatureGrid>
      <AppleLegalNotes />
    </div>
  );
}
