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
import swiftPmIcon from "../images/SwiftPM.png";
import carthageIcon from "../images/Carthage.png";
import cocoaPodsIcon from "../images/CocoaPods.png";
import csvIcon from "../images/CSV.png";

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
          title="SwiftPM Manifests"
          subtitle='Import "Package.resolved" manifest files.'
          icon={swiftPmIcon}
          alt="SwiftPM Manifests"
        />
        <Feature
          title="Carthage Manifests"
          subtitle='Import "Cartfile.resolved" manifest files.'
          icon={carthageIcon}
          alt="Carthage Manifests"
        />
        <Feature
          title="CocoaPods Manifests"
          subtitle='Import "Podfile.lock" manifest files.'
          icon={cocoaPodsIcon}
          alt="CocoaPods Manifests"
        />
        <Feature
          title="CSV Export"
          subtitle="Export licenses as spreadsheet file."
          icon={csvIcon}
          alt="CSV Support"
        />
      </FeatureGrid>
      <AppleLegalNotes />
    </div>
  );
}
