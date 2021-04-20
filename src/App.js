import logo from './logo.svg';
import './App.css';
import {Text} from "./components/Text.js"
import {Button} from './components/Button.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Free biscuits!
        </p>
        <Text name="Steve" />
        <Text name="Larry" />
        <Button /> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
