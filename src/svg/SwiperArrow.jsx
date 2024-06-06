import React from 'react'

const SwiperArrow = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_396_136)">
        <rect x="8" y="4" width="40" height="40" rx="20" fill="white" />
        <path
          d="M20 24H36M36 24L29.2 17M36 24L29.2 31"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_396_136"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_396_136"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.5"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_396_136"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.591667 0 0 0 0 0.591667 0 0 0 0 0.591667 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_396_136"
            result="effect2_dropShadow_396_136"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_396_136"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SwiperArrow
