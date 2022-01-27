const Card = (props) => {
  return (
    <div
      className="image-container"
      onClick={() => props.onClick(props.digimon)}
    >
      <img draggable="false" src={props.digimon.url} alt={props.digimon.name} />
      <p>{props.digimon.name}</p>
    </div>
  );
};

export default Card;
