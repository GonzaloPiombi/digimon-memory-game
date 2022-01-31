const Card = (props) => {
  return (
    <div
      className="image-container"
      onClick={() => props.onClick(props.digimon)}
    >
      <img draggable="false" src={props.digimon.url} alt={props.digimon.name} />
    </div>
  );
};

export default Card;
