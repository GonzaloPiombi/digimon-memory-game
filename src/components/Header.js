import Scorebox from './Scorebox';

const Header = (props) => {
  return (
    <header>
      <div>
        <h1>Digimon Memory Game</h1>
        <p>
          Click on the digimons <strong>BUT</strong> don't click on them twice!
        </p>
      </div>
      <div>
        <Scorebox
          currentScore={props.currentScore}
          bestScore={props.bestScore}
        />
      </div>
    </header>
  );
};

export default Header;
