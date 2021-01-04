import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.innerHTML =
      '!function(e,t){var n=function(){var e=t.createElement("script"),n=t.getElementsByTagName("script")[0];e.src="https://cdn.iubenda.com/iubenda.js",n.parentNode.insertBefore(e,n)};e.addEventListener?e.addEventListener("load",n,!1):e.attachEvent?e.attachEvent("onload",n):e.onload=n}(window,document);';
    script.async = true;

    if (document.body != null) document.body.appendChild(script);
  });

  return (
    <a
      href="https://www.iubenda.com/privacy-policy/86928215"
      className="iubenda-black no-brand iubenda-embed"
    >
      Privacy Policy
    </a>
  );
}
