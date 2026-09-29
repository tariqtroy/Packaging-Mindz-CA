/* EDIT ONLY THIS FILE FOR ADS */
const ADSENSE_CONFIG = {
  CLIENT_ID: "", // Example: ca-pub-1234567890123456
  SLOT_ID: ""    // Example: 1234567890
};

(function () {
  const { CLIENT_ID, SLOT_ID } = ADSENSE_CONFIG;
  if (!CLIENT_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(CLIENT_ID);
  script.crossOrigin = "anonymous";
  script.onload = function () {
    document.querySelectorAll(".adsbygoogle").forEach(function (ad) {
      ad.setAttribute("data-ad-client", CLIENT_ID);
      if (SLOT_ID) ad.setAttribute("data-ad-slot", SLOT_ID);
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); }
      catch (e) { console.warn("AdSense could not initialize:", e); }
    });
  };
  document.head.appendChild(script);
})();
