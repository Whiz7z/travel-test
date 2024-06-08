import React, { useEffect, useRef, useState } from "react";

const BDotSvg = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="14"
        cy="14"
        r="13"
        fill="#714EFF"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M11.0352 18V9.54492H14.4336C16.0215 9.54492 16.9766 10.3535 16.9766 11.6484V11.6602C16.9766 12.5391 16.3262 13.3301 15.4941 13.4707V13.5703C16.6367 13.6934 17.3984 14.502 17.3984 15.6035V15.6152C17.3984 17.0977 16.3145 18 14.5098 18H11.0352ZM14.1289 10.6172H12.3477V13.1426H13.9062C15.0664 13.1426 15.6699 12.709 15.6699 11.8887V11.877C15.6699 11.0801 15.1016 10.6172 14.1289 10.6172ZM14.1699 14.1445H12.3477V16.9277H14.2461C15.4297 16.9277 16.0566 16.4414 16.0566 15.5332V15.5215C16.0566 14.6133 15.4062 14.1445 14.1699 14.1445Z"
        fill="white"
      />
    </svg>
  );
}

// const BDotSvg = ({ h, lineHeight }) => {
//   const svgRef = useRef(null);
//   const [pathD, setPathD] = useState("M14 18L14 100");

//   useEffect(() => {
//     if (svgRef.current) {
//       const svgHeight = svgRef.current.getBoundingClientRect().height;
//       const newPathD = `M14 18L14 ${svgHeight}`;
//       setPathD(newPathD);
//     }
//   }, [h, lineHeight]);
//   return (
//     <svg
//       ref={svgRef}
//       width="28"
//       height={h || "100%"}
//       viewBox="0 0 28 100%"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="6"
//         y="6"
//         width="16"
//         height={lineHeight || "100%"}
//         rx="8"
//         stroke="white"
//         strokeWidth="2"
//       />
//       <path d={pathD} stroke="#3C3C43" strokeOpacity="0.18" strokeWidth="2" />
//       <circle
//         cx="14"
//         cy="14"
//         r="13"
//         fill="#714EFF"
//         stroke="white"
//         strokeWidth="2"
//       />
//       <path
//         d="M11.0352 18V9.54492H14.4336C16.0215 9.54492 16.9766 10.3535 16.9766 11.6484V11.6602C16.9766 12.5391 16.3262 13.3301 15.4941 13.4707V13.5703C16.6367 13.6934 17.3984 14.502 17.3984 15.6035V15.6152C17.3984 17.0977 16.3145 18 14.5098 18H11.0352ZM14.1289 10.6172H12.3477V13.1426H13.9062C15.0664 13.1426 15.6699 12.709 15.6699 11.8887V11.877C15.6699 11.0801 15.1016 10.6172 14.1289 10.6172ZM14.1699 14.1445H12.3477V16.9277H14.2461C15.4297 16.9277 16.0566 16.4414 16.0566 15.5332V15.5215C16.0566 14.6133 15.4062 14.1445 14.1699 14.1445Z"
//         fill="white"
//       />
//     </svg>
//   );
// };

export default BDotSvg;
