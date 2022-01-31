const Scorebox = (props) => {
  return (
    <div className="scorebox">
      <h2>Best Score: {props.bestScore}</h2>
      <h2>Current Score: {props.currentScore}</h2>
    </div>
  );
};

export default Scorebox;
