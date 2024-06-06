import React, { useEffect, useRef, useState } from "react";

const PlanSvg = ({ h, lineHeight }) => {
  const svgRef = useRef(null);
  const [pathD, setPathD] = useState("M14 18L14 100");

  useEffect(() => {
    if (svgRef.current) {
      const svgHeight = svgRef.current.getBoundingClientRect().height;
      const newPathD = `M14 18L14 ${svgHeight}`;
      setPathD(newPathD);
    }
  }, [h, lineHeight]);
  return (
    <svg
      ref={svgRef}
      width="28"
      height={h || "100%"}
      viewBox="0 0 28 100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="23"
        width="16"
        height={lineHeight || "100%"}
        rx="8"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M14 0L14 25"
        stroke="#3C3C43"
        strokeOpacity="0.18"
        strokeWidth="2"
      />
      <path d={pathD} stroke="#3C3C43" strokeOpacity="0.18" strokeWidth="2" />
      <circle
        cx="14"
        cy="31"
        r="13"
        fill="#9D9DA1"
        stroke="white"
        strokeWidth="2"
      />
      <rect
        x="8.79167"
        y="25.7917"
        width="2.08333"
        height="2.08333"
        rx="1.04167"
        fill="white"
        stroke="white"
        strokeWidth="0.416667"
      />
      <rect
        x="8.79167"
        y="29.9583"
        width="2.08333"
        height="2.08333"
        rx="1.04167"
        fill="white"
        stroke="white"
        strokeWidth="0.416667"
      />
      <rect
        x="8.79167"
        y="34.125"
        width="2.08333"
        height="2.08333"
        rx="1.04167"
        fill="white"
        stroke="white"
        strokeWidth="0.416667"
      />
      <rect
        x="13.5834"
        y="26.4167"
        width="5"
        height="0.833333"
        fill="white"
        stroke="white"
        strokeWidth="0.833333"
      />
      <rect
        x="13.5834"
        y="30.5833"
        width="5"
        height="0.833333"
        fill="white"
        stroke="white"
        strokeWidth="0.833333"
      />
      <rect
        x="13.5834"
        y="34.75"
        width="5"
        height="0.833333"
        fill="white"
        stroke="white"
        strokeWidth="0.833333"
      />
    </svg>
  );
};

export default PlanSvg;
