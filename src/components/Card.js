const Card = (props) => {
  console.log(props.digimon);
  return (
    <div
      key={props.digimon.id}
      className="image-container"
      onClick={props.onClick}
    >
      <img src={props.digimon.url} alt={props.digimon.name} />
      <p>{props.digimon.name}</p>
    </div>
  );
};

export default Card;
