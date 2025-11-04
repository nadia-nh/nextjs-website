// RCScout.jsx
"use client";

import React, { useEffect } from "react";

function RCScout() {
  const rerenderScout = () => {
    if (window._rcs && window._rcs.inst) {
      window._rcs.inst.render();
    }
  };

  // run it on mount and whenever this component updates
  useEffect(() => {
    rerenderScout();
  });

  return(
    <div className="rc-scout">
      <script async defer src="https://www.recurse-scout.com/loader.js?t=1d4d7f9e9f6113fc848cdef6c4114a58"></script>
    </div>
  );
}

export default RCScout;
