import React, { useEffect, useRef, useState } from "react";

const InfoLineSvg = ({ h, lineHeight }) => {
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
        y="6"
        width="16"
        height={lineHeight || "100%"}
        rx="8"
        stroke="white"
        strokeWidth="2"
      />
      <path d={pathD} stroke="#3C3C43" strokeOpacity="0.18" strokeWidth="2" />
      <circle
        cx="14"
        cy="14"
        r="13"
        fill="#714EFF"
        stroke="white"
        strokeWidth="2"
      />
      
      <path
        d="M10.2383 18L13.291 9.54492H14.709L17.7617 18H16.3789L15.6172 15.7148H12.3828L11.6152 18H10.2383ZM13.9473 11.0273L12.7344 14.6602H15.2656L14.0469 11.0273H13.9473Z"
        fill="white"
      />
    </svg>
  );
};

export default InfoLineSvg;
