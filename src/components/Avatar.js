import React from "react";
import "../styles/Avatar.css";

/* Images */
import avatarImage from "../../assets/images/about/avatar.png";

export default function Avatar() {
  return <div className="avatarContainer">
    <img className="avatar__image" src={avatarImage} alt="Avatar Image" />
  </div>;
}
