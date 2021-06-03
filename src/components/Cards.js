import "./cards.css";

function Cards(props) {
  function onCardSelect(e) {
    props.onCardSelect(e.target.alt);
  }

  function getCardsAsElements() {
    return props.cards.map((card) => (
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
