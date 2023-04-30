import React from "react";
import Script from 'next/script'

export default function PrivacyPolicy() {
  return (
    <div>
      <Script id="show-banner" strategy="beforeInteractive">
        {`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}
      </Script>
      <a
        href="https://www.iubenda.com/privacy-policy/86928215"
        className="iubenda-black no-brand iubenda-noiframe iubenda-embed iubenda-noiframe "
      >
        Privacy Policy
      </a>
    </div>
  );
}