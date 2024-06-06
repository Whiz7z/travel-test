import React, { useEffect, useRef, useState } from "react";

const HighlightsLineSvg = ({ h, lineHeight }) => {
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
      <path
        d="M9.96412 31.875C11.3762 31.2566 12.5066 30.1262 13.125 28.7141C13.7434 30.1262 14.8738 31.2566 16.2859 31.875C14.8738 32.4934 13.7434 33.6238 13.125 35.0359C12.5066 33.6238 11.3762 32.4934 9.96412 31.875Z"
        stroke="white"
        strokeWidth="1.25"
      />
      <path
        d="M17.3949 25.5257C17.4178 25.4108 17.5822 25.4108 17.6051 25.5257C17.7938 26.4689 18.5311 27.2062 19.4743 27.3949C19.5892 27.4178 19.5892 27.5822 19.4743 27.6051C18.5311 27.7938 17.7938 28.5311 17.6051 29.4743C17.5822 29.5892 17.4178 29.5892 17.3949 29.4743C17.2062 28.5311 16.4689 27.7938 15.5257 27.6051C15.4108 27.5822 15.4108 27.4178 15.5257 27.3949C16.4689 27.2062 17.2062 26.4689 17.3949 25.5257Z"
        fill="white"
      />
    </svg>
  );
};

export default HighlightsLineSvg;
