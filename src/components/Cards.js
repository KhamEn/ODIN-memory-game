import "./cards.css";

function Cards(props) {
  function onCardSelect(e) {
    props.onCardSelect(e.target.alt);
  }

  function getCardsAsElements() {
    return props.cards.map((card) => (
      <div className="Card">
        <img src={card.image} alt={card.name} onClick={onCardSelect} />
        <div className="Card-Caption">{card.name}</div>
      </div>
    ));
  }

  return <div className="grid-container">{getCardsAsElements()}</div>;
}

export default Cards;
