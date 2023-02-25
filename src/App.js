import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [answerValue, setAnswerValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

    const handleAnswerChange = (event) => {
      setAnswerValue(event.target.value);
      console.log('The value entered was: ' + event.target.value);
    };

    const handleDropdownChange = (event) => {
      setSelectedValue(event.target.value);
      console.log('The value entered was: ' + event.target.value);
    };

    const handleClick = () => {
      <link to="/src/bracket.js"></link>
      console.log('Submit button clicked!');
      // Do something with form data here, e.g. submit to server
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
              <input type="text" value={answerValue} onChange={handleAnswerChange} />
            </label>
          </div>
          <div>
            <label>
              Bracket Type:
              <select value={selectedValue} onChange={handleDropdownChange}>
              <option value="option4">Single Elimination</option>
            </select>
            </label>
          </div>
          <label>
            Bracket Size:
            <select value={selectedValue} onChange={handleDropdownChange}>
              <option value="option4">4</option>
              <option value="option5">5</option>
              <option value="option6">6</option>
              <option value="option7">7</option>
              <option value="option8">8</option>
              <option value="option9">9</option>
            </select>
          </label>
        </div>
        <button onClick={handleClick}>Submit</button>
      </header>
    </div>
  );
}

export default App;
