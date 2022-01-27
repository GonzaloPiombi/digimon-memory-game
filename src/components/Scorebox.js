const Scorebox = (props) => {
  return (
    <div>
      <h2>{props.bestScore}</h2>
      <h2>{props.currentScore}</h2>
    </div>
  );
};

export default Scorebox;
