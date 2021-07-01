import "./scoreboard.css"

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
        {/*<span>Current Score:  </span>*/}
        {/*<span>{props.currentScore}</span>*/}
        {/*<span>Best Score:  </span>*/}
        {/*<span>{props.bestScore}</span>*/}
      <div className="Scoreboard-currentScore">SCORE: {props.currentScore}</div>
      <div className="Scoreboard-bestScore">BEST SCORE: {props.bestScore}</div>
    </div>
  );
}

export default Scoreboard;
