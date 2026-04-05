"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [canTrack, setCanTrack] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    setCanTrack(consent === "accepted");

    // Listen for consent changes
    function onStorage(e: StorageEvent) {
      if (e.key === "cookie-consent") {
        setCanTrack(e.newValue === "accepted");
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!GA_ID || !canTrack) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
