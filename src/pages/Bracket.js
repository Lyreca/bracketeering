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
  const [matches, setMatches] = useState([]);
  const [currMatchup, setCurrMatchup] = useState([]);

  useEffect(() => {
    let matchups = [];
    const shuffledType = shuffle(type);
    
    // Initialize matches
    if (matches.length === 0) {
      for (let i = size-1; i >= 0; i -= 2) {
          matchups.push([shuffledType[i], shuffledType[i-1]]);
      }

      const matches = [];
      matches.push(matchups);
      setMatches(matches);
    }
    else
    if (currMatchup.length === matches[matches.length-1].length) {
      // Add new round
      alert("Add new round")
      let matchups = [];
      if(currMatchup.length === 1) {
        alert("Winner is " + currMatchup[0]);
        matchups.push([currMatchup[0]]);
      }
      else {
        for (let i = 0; i < currMatchup.length; i += 2) {
          matchups.push([currMatchup[i], currMatchup[i+1]]);
        }
      }
      console.log(matchups)
      const newMatches = [...matches, matchups];

      setMatches(newMatches);
      setCurrMatchup([]);
    }
  }, [matches, currMatchup]);

  const handleButtonClick = (round, match, pos) => {
    console.log("Button clicked on Round " + round + " Match " + match + " Position " + pos);
    const teamName = matches[round][match][pos];
    console.log("Team name: " + teamName);
    
    setCurrMatchup([...currMatchup, teamName]);
    console.log("Current matchup: " + currMatchup);
    
  }

  return (
    <div className="App">
      <header className="Bracket-header">
        <h1 className="Page-title">{name}</h1>
      </header>
      <div className="Bracket-container">
        {matches.map((match, index) => (
          <div className="Bracket-round" key={index}>
            <h2 className="Bracket-round-title">Round {index+1}</h2>
            {match.map((matchup, num) => {
              return (
                <div className="Bracket-matchup" key={"round" + index+1 + "match" + num+1}>
                  
                  {matchup.map((team, pos) => {
                    return (
                      <button key={"round" + index+1 + "match" + num+1 + "pos" + pos+1} className="Bracket-matchup-team" onClick={() => handleButtonClick(index, num, pos)}>
                        {team}
                      </button>
                    );
                  })}
                </div>
              );
            })}
            <br></br>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Bracket;
