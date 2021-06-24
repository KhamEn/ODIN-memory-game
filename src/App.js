import { useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";
import {
  Bach,
  Beethoven,
  Brahms,
  Bruckner,
  Chopin,
  Dvorak,
  Glass,
  Haydn,
  Mendelssohn,
  Mozart,
  Rachmaninoff,
  Schubert,
} from "./components/ComposerImages";

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let current = cards[i];
    cards[i] = cards[random];
    cards[random] = current;
  }
  return cards;
}

function App() {
  const composersCards = [
    { name: "Bach", image: Bach },
    { name: "Beethoven", image: Beethoven },
    { name: "Brahms", image: Brahms },
    { name: "Bruckner", image: Bruckner },
    { name: "Chopin", image: Chopin },
    { name: "Dvorak", image: Dvorak },
    { name: "Glass", image: Glass },
    { name: "Haydn", image: Haydn },
    { name: "Mendelssohn", image: Mendelssohn },
    { name: "Mozart", image: Mozart },
    { name: "Rachmaninoff", image: Rachmaninoff },
    { name: "Schubert", image: Schubert },
  ];
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cards, setCards] = useState(shuffle(composersCards));
  let [selectedCards, setSelectedCards] = useState(new Set());

  function onCardSelect(cardName) {
    if (selectedCards.has(cardName)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedCards(new Set());
    } else {
      setSelectedCards((prevCards) => new Set(prevCards.add(cardName)));
      setCurrentScore((prevScore) => prevScore + 1);
    }

    setCards(shuffle(composersCards));
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Cards cards={cards} onCardSelect={onCardSelect} />
    </div>
  );
}

export default App;
