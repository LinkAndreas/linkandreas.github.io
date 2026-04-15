import React from "react";
import Image from 'next/image'
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import AppInfo from "../../components/AppInfo.js";
import AppStoreBadge from "../../components/AppStoreBadge.js";
import Feature from "../../components/Feature.js";
import FeatureGrid from "../../components/FeatureGrid.js";
import AppleLegalNotes from "../../components/AppleLegalNotes.js";
import styles from "../../styles/ImgZen/index.module.css";

import screenshot from "../../../public/images/imgzen_app.png";
import appIcon from "../../../public/images/imgzen_appIcon.png";
import formatConverter from "../../../public/images/imgzen_convert.png";
import batchProcessing from "../../../public/images/imgzen_batch.png";
import qualityControl from "../../../public/images/imgzen_control.png";
import imageSources from "../../../public/images/imgzen_sources.png";
import exportOptions from "../../../public/images/imgzen_export.png";
import privacy from "../../../public/images/imgzen_privacy.png";

export default function ImgZen() {
  return (
    <>
      <Head>
        {/* Next SEO tags */}
        {
          generateNextSeo({
            title: "ImgZen - Link Andreas",
            description: "The Image Converter",
            canonical: "https://www.linkandreas.de/imgzen",
            openGraph: {
              url: "https://www.linkandreas.de/imgzen",
              title: "ImgZen - Link Andreas",
              description: "The Image Converter",
              images: [
                {
                  url: "https://www.linkandreas.de/images/imgzen_app.png",
                  width: 1194,
                  height: 785,
                  alt: 'ImgZen Teaser Image',
                  type: 'image/png',
                }
              ],
              siteName: 'Andreas Link',
            },
            twitter: {
              handle: '@handle',
              site: '@site',
              cardType: 'summary_large_image',
            },
          })
        }
      </Head>
      <div className={styles.imgzenContainer}>
        <AppInfo
          title="ImgZen"
          subtitle="The Image Converter"
          icon={appIcon}
        />
        <Image
          className={styles.imgzenAppScreenshot}
          src={screenshot}
          alt="ImgZen on iPhone and iPad"
        />
        <AppStoreBadge url="https://apps.apple.com/us/app/imgzen/id6757331137" />
        <FeatureGrid>
          <Feature
            title="Format Converter"
            subtitle="Convert images between PNG, JPEG, TIFF, BMP, HEIC, and WebP effortlessly."
            icon={formatConverter}
            alt="Format Converter"
          />
          <Feature
            title="Batch Processing"
            subtitle="Convert multiple images at once with progress tracking."
            icon={batchProcessing}
            alt="Batch Processing"
          />
          <Feature
            title="Quality Control"
            subtitle="Choose between lossless or lossy formats and adjust compression settings."
            icon={qualityControl}
            alt="Quality Control"
          />
          <Feature
            title="Image Sources"
            subtitle="Import images from your Photos library or file system easily."
            icon={imageSources}
            alt="Image Sources"
          />
          <Feature
            title="Export Options"
            subtitle="Share converted images directly from the app."
            icon={exportOptions}
            alt="Export Options"
          />
          <Feature
            title="Privacy"
            subtitle="All conversions happen locally. No data collection, no full library access."
            icon={privacy}
            alt="Privacy"
          />
        </FeatureGrid>
        <AppleLegalNotes />
      </div>
    </>
  );
}