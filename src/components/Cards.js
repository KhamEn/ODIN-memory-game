import React, { useEffect } from "react";

function shuffle(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let current = cards[i];
    cards[i] = cards[random];
    cards[random] = current;
  }
}

function Cards(props) {
  const cards = [
    { name: "greg", image: "simple" },
    { name: "staci", image: "flat" },
    {
      name: "horatio",
      image: "old school",
    },
  ];
  shuffle(cards);

  function onCardSelect() {
    // send id of the selected card to App,
    // through a props function
  }

  function getCardsAsElements() {
    const elements = cards.map((card) => (
      <li key={card.name}>{`${card.name} is ${card.image}`}</li>
    ));

    return elements;
  }

  return (
    <div>
      {/*{cards.map((card, index) => {*/}
      {/*  return (*/}
      {/*    <li key={index}>{`Name: ${card.name}, Image: ${card.image}`}</li>*/}
      {/*  );*/}
      {/*})}*/}
      {getCardsAsElements()}
    </div>
  );
}

export default Cards;
