import { useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";
import kenshinImg from "./images/kenshin.jpg";
import saitoImg from "./images/saito.jpg";
import shishioImg from "./images/villain.jpg";
import sanosukeImg from "./images/friend.jpg";
import kaoruImg from "./images/gf.jpg";
import yahikoImg from "./images/kid.jpg";

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
  const cardsOG = [
    { name: "Kenshin", imageSource: kenshinImg },
    { name: "Saito", imageSource: saitoImg },
    { name: "Shishio", imageSource: shishioImg },
    { name: "Sanosuke", imageSource: sanosukeImg },
    { name: "Kaoru", imageSource: kaoruImg },
    { name: "Yahiko", imageSource: yahikoImg },
  ];
  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [cards, setCards] = useState(shuffle(cardsOG));
  let [selectedCards, setSelectedCards] = useState(new Set());

  function onCardSelect(cardName) {
    if (selectedCards.has(cardName)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setSelectedCards(new Set());
    } else {
      // if the card doesn't exist in the selected cards, add 1 point, then shuffle
      setSelectedCards((prevCards) => new Set(prevCards.add(cardName)));
      setCurrentScore((prevScore) => prevScore + 1);
    }

    setCards(shuffle(cardsOG));
  }

  return (
    <div>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Cards cards={cards} onCardSelect={onCardSelect} />
    </div>
  );
}

export default App;
