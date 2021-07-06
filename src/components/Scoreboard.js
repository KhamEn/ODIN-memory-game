import "./scoreboard.css";

function Scoreboard(props) {
  return (
    <div className="Divided">
      <span className="Scoreboard">
        <div className="Scoreboard-titleCurrent">Current</div>
        <div className="Scoreboard-currentScore">{props.currentScore}</div>
      </span>
      <span className="Divided-divider"></span>
      <span className="Scoreboard">
        <div className="Scoreboard-titleBest">Best</div>
        <div className="Scoreboard-bestScore">{props.bestScore}</div>
      </span>
    </div>
  );
}

export default Scoreboard;
