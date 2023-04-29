import React from "react";
import Image from 'next/image'
import { NextSeo } from "next-seo";
import AppInfo from "../components/AppInfo.js";
import AppStoreBadge from "../components/AppStoreBadge.js";
import Feature from "../components/Feature.js";
import FeatureGrid from "../components/FeatureGrid.js";
import AppleLegalNotes from "../components/AppleLegalNotes.js";
import styles from "../styles/Timity.module.css";

import screenshot from "../../public/images/timity_app.png";
import appIcon from "../../public/images/timity_appIcon.png";
import eventList from "../../public/images/timity_eventList.png";
import timeCalculator from "../../public/images/timity_timeCalculator.png";
import solarCalculator from "../../public/images/timity_solarCalculator.png";
import eventCalculator from "../../public/images/timity_eventCalculator.png";
import settings from "../../public/images/timity_settings.png";
import durationCalculator from "../../public/images/timity_durationCalculator.png";

export default function Timity() {
  return (
    <>
      <NextSeo
        title="Timity - Link Andreas"
        description="The missing Time Calculator"
        canonical={"https://www.linkandreas.de/timity"}
        openGraph={{
          url: "https://www.linkandreas.de/timity",
          title: "Timity - Link Andreas",
          description: "The missing Time Calculator",
          images: [
            {
              url: "https://www.linkandreas.de/images/timity_app.png",
              width: 1194,
              height: 785,
              alt: 'Timity Teaser Image',
              type: 'image/png',
            }
          ],
          siteName: 'Andreas Link',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className={styles.timityContainer}>
        <AppInfo
          title="Timity"
          subtitle="The missing Time Calculator"
          icon={appIcon}
        />
        <Image
          className={styles.timityAppScreenshot}
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
    </>
  );
}