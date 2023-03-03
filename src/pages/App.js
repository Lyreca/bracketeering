import logo from '../assets/logo.svg';
import '../styles/App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [bracketName, setName] = useState('');
  const [bracketSize, setSize] = useState(4);
  const [bracketType, setType] = useState('Football');
  const navigate = useNavigate();


    const handleName = (event) => {
      setName(event.target.value);
    };

    const handleType = (event) => {
      setType(event.target.value);
    };

    const handleSize = (event) => {
      setSize(event.target.value);
    };

    const handleClick = () => {
      console.log('The Name entered was: ' + bracketName);
      console.log('The Type entered was: ' + bracketType);
      console.log('The Size entered was: ' + bracketSize);
      console.log('Submit button clicked!');
      // Do something with form data here, e.g. submit to server

      navigate('/bracket');
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bracketeering</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>
            <label>
              Bracket Name:
              <input type="text" value={bracketName} onChange={handleName} />
            </label>
          </div>
          <div>
            <label>
              Bracket Type:
              <select value={bracketType} onChange={handleType}>
              <option defaultValue="Football">Football</option>
              <option value="Soccer">Soccer</option>
              <option value="Baseball">Baseball</option>
            </select>
            </label>
          </div>
          <label>
            Bracket Size:
            <select value={bracketSize} onChange={handleSize}>
              <option defaultValue="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </label>
        </div>
        <button onClick={handleClick}>Submit</button>
      </header>
    </div>
  );
}

export default App;
