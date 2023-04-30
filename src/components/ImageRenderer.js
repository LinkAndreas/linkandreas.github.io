import React from "react";
import Image from "next/image";
import styles from "../styles/ImageRenderer.module.css";

export default function ImageRenderer(props) {
  return <Image src={"/images/" + props.src} alt="Image" width={500} height={500} className={styles.imageBlock} />
}
