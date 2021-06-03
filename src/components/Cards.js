import React from "react";
import kenshinImg from "../images/kenshin.jpg";
import saitoImg from "../images/saito.jpg";
import shishioImg from "../images/villain.jpg";
import sanosukeImg from "../images/friend.jpg";
import kaoruImg from "../images/gf.jpg";
import yahikoImg from "../images/kid.jpg";
import "./cards.css";

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let current = cards[i];
    cards[i] = cards[random];
    cards[random] = current;
  }
}

function Cards() {
  const cards = [
    { name: "Kenshin", imageSource: kenshinImg },
    { name: "Saito", imageSource: saitoImg },
    { name: "Shishio", imageSource: shishioImg },
    { name: "Sanosuke", imageSource: sanosukeImg },
    { name: "Kaoru", imageSource: kaoruImg },
    { name: "Yahiko", imageSource: yahikoImg },
  ];
  shuffle(cards);

  function onCardSelect(e) {
    // send id of the selected card to App,
    // through a props function

    console.log(e.target.alt);
    shuffle(cards);
  }

  function getCardsAsElements() {
    return cards.map((card) => (
      <figure key={card.name}>
        <img
          src={card.imageSource}
          alt={card.name}
          width={200}
          height={250}
          onClick={onCardSelect}
        />
        <figcaption>{card.name}</figcaption>
      </figure>
    ));
  }

  return <div className="grid-container">{getCardsAsElements()}</div>;
}

export default Cards;
