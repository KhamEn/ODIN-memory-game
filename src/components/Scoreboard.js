import "./scoreboard.css";

function CurrentScore(props) {
  return (
    <div className="Scoreboard-currentScore">SCORE: {props.currentScore}</div>
  );
}

function BestScore(props) {
  return (
    <div className="Scoreboard-bestScore">BEST SCORE: {props.bestScore}</div>
  );
}

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <div className="Scoreboard-titleCurrent">Current</div>
      <div className="Scoreboard-currentScore">{props.currentScore}</div>
      <div className="Scoreboard-titleBest">Best</div>
      <div className="Scoreboard-bestScore">{props.bestScore}</div>
    </div>
  );
}

export { CurrentScore, BestScore, Scoreboard };
