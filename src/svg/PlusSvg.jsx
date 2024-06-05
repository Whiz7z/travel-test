

function PlusSvg({ w, h, color }) {
  return (
    <svg
      width={w || "16"}
      height={h || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.5V14.5M1.5 8L14.5 8"
        stroke={color || "black"}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default PlusSvg;
