import logo from '../assets/logo.svg';
import bracketName from './App.js';

const Bracket = () => {
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
