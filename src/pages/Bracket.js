import { useEffect, useState } from 'react';
import '../styles/Bracket.css';
import { useLocation } from 'react-router-dom';

const shuffle = (array) => {
  // Implementation of Fisher-Yates shuffle algorithm
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const Bracket = () => {
  const {state} = useLocation();
  const {name, size, type} = state;
  const [bracket, setBracket] = useState([]);

  useEffect(() => {
    let newBracket = [];
    const shuffledType = shuffle(type);
    for (let i = 0; i < size; i++) {
      newBracket.push(shuffledType[i]);
    }
    setBracket(newBracket);
  }, [size]);

  return (
    <div className="App">
      <header className="Bracket-header">
        <h1 className="Page-title">{name}</h1>
        {bracket.map((item, index) => (
          <div key={index} className="teams">
            {item}
          </div>
        ))}
      </header>
    </div>
  );
};

export default Bracket;
