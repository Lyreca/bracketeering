import logo from './logo.svg';
import bracketName from './App.js';

function Bracket() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Created Bracket</h1>
        <p>Bracket Name: {bracketName}</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Bracket;
