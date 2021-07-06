import "./banner.css";
import Scoreboard from "./Scoreboard";

function Banner(props) {
  return (
    <div className="Banner">
      <div className="Banner-title">Memory Game</div>
      <span className="Banner-logoLine">
        <Scoreboard
          currentScore={props.currentScore}
          bestScore={props.bestScore}
        />
      </span>
    </div>
  );
}

export default Banner;
