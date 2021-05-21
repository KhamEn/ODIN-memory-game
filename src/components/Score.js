import React from "react";

function Score(props) {
  return (
    <div>
      <div>Current Score: {props.scores.currentScore}</div>
      <div>Best Score: {props.scores.bestScore}</div>
    </div>
  );
}

export default Score;
