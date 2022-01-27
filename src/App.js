import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Scorebox from './components/Scorebox';
import CardGrid from './components/CardGrid';
import imagesInformation from './components/ImagesInfo';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    setDigimons(shuffleDigimons(imagesInformation));
  }, []);

  useEffect(() => {
    if (currentScore === 12) {
      //TODO Update screen to announce player's victory.
      console.log('Winner');
    }
  }, [currentScore]);

  const handleCardClick = (digimon) => {
    if (digimon.isClicked) {
      setBestScore(currentScore > bestScore ? currentScore : bestScore);
      setCurrentScore(0);
      const newArr = [...digimons];
      newArr.map((item) => (item.isClicked = false));
      setDigimons(newArr);
    } else {
      setCurrentScore(currentScore + 1);
      const newArr = [...digimons];
      newArr.find((item) => item === digimon).isClicked = true;
      setDigimons(shuffleDigimons(newArr));
    }
  };

  const shuffleDigimons = (arr) => {
    let currentItem = arr.length;
    let randomItem;

    while (currentItem !== 0) {
      randomItem = Math.floor(Math.random() * currentItem);
      currentItem--;

      [arr[currentItem], arr[randomItem]] = [arr[randomItem], arr[currentItem]];
    }

    return arr;
  };

  return (
    <div>
      <Header />
      <Scorebox currentScore={currentScore} bestScore={bestScore} />
      <div className="grid">
        <CardGrid imagesInformation={digimons} onClick={handleCardClick} />
      </div>
    </div>
  );
}

export default App;
