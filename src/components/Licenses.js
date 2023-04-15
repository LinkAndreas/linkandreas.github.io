import React from "react";
import Metadata from "./Metadata";
import AppInfo from "./AppInfo.js";
import MacAppStoreBadge from "./MacAppStoreBadge.js";
import Feature from "./Feature.js";
import FeatureGrid from "./FeatureGrid.js";
import AppleLegalNotes from "./AppleLegalNotes.js";
import "../styles/Licenses.css";

/* Images */
import screenshot from "../../assets/images/licenses/app.png";
import appIcon from "../../assets/images/licenses/appIcon.png";
import swiftPmIcon from "../../assets/images/licenses/SwiftPM.png";
import carthageIcon from "../../assets/images/licenses/Carthage.png";
import cocoaPodsIcon from "../../assets/images/licenses/CocoaPods.png";
import csvIcon from "../../assets/images/licenses/CSV.png";

export default function Licenses() {
  return (
    <Metadata
      title='Licenses - Andreas Link'
      description='Spot and export licenses'
      children={
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
      }
    />
  );
}