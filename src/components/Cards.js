import "./cards.css";

function Cards(props) {
  function onCardSelect(e) {
    // send id of the selected card to App,
    // through a props function

    // console.log(e.target.alt);
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
