"use client";
import React, { useEffect } from "react";

const TawkToInit = () => {
  useEffect(() => {
    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/65dcb16d9131ed19d971c73e/1hnj1a595";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0?.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default TawkToInit;
