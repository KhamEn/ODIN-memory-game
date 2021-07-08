import "./cards.css";

function Cards(props) {
  function onCardSelect(e) {
    props.onCardSelect(e.target.alt);
  }

  function getCardsAsElements() {
    return props.cards.map((card) => (
      <div className="Card Card--hovering">
        <img
          src={card.image}
          alt={card.name}
          className="Card-composerPicture"
          onClick={onCardSelect}
        />
        <div className="Card-composerName">{card.name}</div>
      </div>
    ));
  }

  return <div className="grid-container">{getCardsAsElements()}</div>;
}

export default Cards;
