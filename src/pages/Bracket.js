import { useEffect, useState } from 'react';
import '../styles/Bracket.css';
import { useLocation } from 'react-router-dom';

const Bracket = () => {
  const {state} = useLocation();
  const {name, size, type} = state;
  const [bracket, setBracket] = useState([]);

  useEffect(() => {
    let newBracket = [];
    for (let i = 0; i < size; i++) {
      newBracket.push(type[i]);
    }
    setBracket(newBracket);
  }, [size]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Page-title">{name}</h1>
        {bracket.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </header>
    </div>
  );
};

export default Bracket;
