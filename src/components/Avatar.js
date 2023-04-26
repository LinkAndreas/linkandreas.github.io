import React from "react";
import Image from 'next/image'
import styles from "../styles/Avatar.module.css";

import avatarImage from "../../public/images/about_avatar.png";

export default function Avatar() {
  return <div className={styles.avatarContainer}>
    <Image className={styles.avatar__image} src={avatarImage} alt="Avatar Image" />
  </div>;
}
