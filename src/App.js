import { useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";

function App() {
  let [scores, setScores] = useState({ currentScore: 0, bestScore: 10 });

  return (
    <div>
      <Score scores={scores} />
      <Cards />
    </div>
  );
}

export default App;
