import React from "react";
import Image from 'next/image'
import AppInfo from "../components/AppInfo.js";
import MacAppStoreBadge from "../components/MacAppStoreBadge.js";
import Feature from "../components/Feature.js";
import FeatureGrid from "../components/FeatureGrid.js";
import AppleLegalNotes from "../components/AppleLegalNotes.js";
import styles from "../styles/Licenses.module.css";

/* Images */
import screenshot from "../../public/images/licenses_app.png";
import appIcon from "../../public/images/licenses_appIcon.png";
import swiftPmIcon from "../../public/images/licenses_SwiftPM.png";
import carthageIcon from "../../public/images/licenses_Carthage.png";
import cocoaPodsIcon from "../../public/images/licenses_CocoaPods.png";
import csvIcon from "../../public/images/licenses_CSV.png";

export default function Licenses() {
  return (
    <div className={styles.licensesContainer}>
      <AppInfo
        title="Licenses"
        subtitle="Spot and export licenses"
        icon={appIcon}
      />
      <Image
        className={styles.licensesAppScreenshot}
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