import React from "react";
import "./Circles.css";

export default function Circles({ buttons }) {
  return (
    <div className="Circles">
      {buttons.map((btn) => (
        <div className={btn.selected ? "selected" : ""}>{btn.idx}</div>
      ))}
    </div>
  );
}
