import '../styles/App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Football, Baseball, Soccer } from '../assets/Teams'; 


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

      if (bracketType === "Football"){
        navigate('/spring2023/cscn408/asgn02_app04/bracket',
      {state: 
        {
          name: bracketName,
          size: bracketSize,
          type: Football
        }
      }
      );
      }
      else if (bracketType === "Baseball"){
        navigate('/spring2023/cscn408/asgn02_app04/bracket',
      {state: 
        {
          name: bracketName,
          size: bracketSize,
          type: Baseball
        }
      }
      );
      }
      else if (bracketType === "Soccer"){
        navigate('/spring2023/cscn408/asgn02_app04/bracket',
      {state: 
        {
          name: bracketName,
          size: bracketSize,
          type: Soccer
        }
      }
      );
      }
      
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Page-title'>Bracketeering</h1>
        <div>
          <div className='space'>
            <label className='Page-header'>
              Bracket Name: 
              <input type="text" value={bracketName} onChange={handleName} />
            </label>
          </div>
          <div className='space'>
            <label className='Page-header'>
              Bracket Type: 
              <select value={bracketType} onChange={handleType}>
              <option defaultValue="Football">Football</option>
              <option value="Soccer">Soccer</option>
              <option value="Baseball">Baseball</option>
            </select>
            </label>
          </div>
          <div className='space'>
          <label className='Page-header'>
            Bracket Size: 
            <select value={bracketSize} onChange={handleSize}>
              <option defaultValue="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </label>
          </div>
        </div>
        <button onClick={handleClick}>Submit</button>
      </header>
    </div>
  );
}

export default App;
