import logo from '../assets/logo.svg';
import '../styles/Bracket.css';
import { useLocation } from 'react-router-dom';

const Bracket = () => {
  const {state} = useLocation();
  const {name, size, type} = state;



  return (
    <div className="App">
      <header className="App-header">
        <h1>Created Bracket</h1>
        <p>Bracket Name: {name}</p>
        <p>Bracket Type: {type}</p>
        <p>Bracket Size: {size}</p>
      </header>
    </div>
  );
}

export default Bracket;
