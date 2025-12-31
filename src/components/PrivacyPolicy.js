'use client';

import React from "react";
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function PrivacyPolicy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Script src="https://cdn.iubenda.com/iubenda.js" />
      <a
        href="https://www.iubenda.com/privacy-policy/86928215"
        className="iubenda-black no-brand iubenda-noiframe iubenda-embed"
      >
        Privacy Policy
      </a>
    </>
  );
}