import React from "react";
import "../styles/XingBadge.css";

export default function XingBadge() {
  return (
    <div className="xingBadgeContainer">
      <a
        href="https://www.xing.com/profile/Andreas_Link73"
        target="_blank"
        rel="me noopener noreferrer"
      >
        <img
          src="https://www.xing.com/img/buttons/12_en_btn.gif"
          width="99"
          height="23"
          alt="Andreas Link"
        />
      </a>
    </div>
  );
}
