import React from "react";
import "./CircleSelector.css";

export default function CircleSelector({ buttons, handleClick }) {
  //   console.log(buttons);
  return (
    <div className="CircleSelector">
      {buttons.map((btn) => (
        <button
          className={btn.selected ? "selected" : ""}
          onClick={function () {
            handleClick(btn);
          }}
        >
          {btn.selected
            ? `CIRCLE ${btn.idx} selected`
            : `SELECT CIRCLE ${btn.idx}`}
        </button>
      ))}
    </div>

    /* <button className={circleselector.selected ? "selected" : ""}>
          {select.circleselector.selected
            ? `CIRCLE ${circleselector.idx} SELECTED`
            : `SELECT CIRCLE ${circleselector.idx} `}
        </button> */

    // <div className="CircleSelector">
    //   <button className={select.buttonOneSelected ? "selected" : ""}>
    //     {select.buttonOneSelected ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
    //   </button>
    //   <button className={select.buttonTwoSelected ? "selected" : ""}>
    //     {select.buttonTwoSelected ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}
    //   </button>
    //   <button className={select.buttonThreeSelected ? "selected" : ""}>
    //     {select.buttonThreeSelected ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}
    //   </button>
    //   <button className={select.buttonFourSelected ? "selected" : ""}>
    //     {select.buttonFourSelected ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}
    //   </button>
    // </div>
  );
}
