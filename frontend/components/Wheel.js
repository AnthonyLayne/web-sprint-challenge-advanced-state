import React from "react";
import { connect } from "react-redux";

import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

// use the "new" operator to make a new array with 6 cogs
//use map to map out the cogs- needs cog and index, 6 array indexes
//need the active index to determine where "B" is
//must change className based on whether "cog active" or "cog"

function Wheel({ moveClockwise, moveCounterClockwise, currentIndex }) {
  const newWheel = new Array(6).fill(null);
  newWheel[currentIndex] = "B";
  return (
    <div id="wrapper">
      <div id="wheel">
        {newWheel.map((cog, idx) => {
          let clNm = cog === "B" ? "cog active" : "cog";
          return (
            <div className={clNm} key={idx} style={{ "--i": idx }}>
              {cog}
            </div>
          );
        })}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={moveClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.wheel,
  };
};

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);

//<div className="cog active" style={{ "--i": 0 }}>  B  </div>
{
  /* <div className="cog" style={{ "--i": 1 }}></div>
<div className="cog" style={{ "--i": 2 }}></div>
<div className="cog" style={{ "--i": 3 }}></div>
<div className="cog" style={{ "--i": 4 }}></div>
<div className="cog" style={{ "--i": 5 }}></div> */
}
{
  /* --i is a custom CSS property, no need to touch that nor the style object */
}
