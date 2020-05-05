import React from "react";
import "../styles/Timity.css";
import AppInfo from "./AppInfo.js";
import AppStoreBadge from "./AppStoreBadge.js";
import Feature from "./Feature.js";

/* Images */
import screenshot from "../images/screenshot.png";
import appIcon from "../images/appIcon.png";
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
        className="appScreenshot"
        src={screenshot}
        alt="Timity on iPhone and iPad"
      />
      <AppStoreBadge url="http://itunes.apple.com/us/app/timity/id491746507" />
      <div className="featureGrid__container">
        <div className="featureGrid">
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
        </div>
      </div>
      <p className="legalNotes">
        Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc.,
        registered in the U.S. and other countries. App Store is a service mark
        of Apple Inc., registered in the U.S. and other countries.
      </p>
    </div>
  );
}
