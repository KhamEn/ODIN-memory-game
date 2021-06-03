import React from "react";

function Score(props) {
  return (
    <div>
      <div>Current Score: {props.currentScore}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  );
}

export default Score;
