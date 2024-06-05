import React from "react";

function Dots({ w, h, color }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        rowGap: '4px',
        columnGap: '4px',
        width: '14px',
        height: '14px',
        backgroundColor: color
      }}
    >
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>

      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>

      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
      <div style={{ width: 2, height: 2, backgroundColor: "white" }}></div>
    </div>
  );
}

export default Dots;
