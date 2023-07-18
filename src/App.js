import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import Identity from "./components/Identity";
import Time from "./components/Time";
import Use from "./components/Use"


export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Hello/>
                <Time date={new Date()}/>
                <Identity
                    name={'Amine'}
                    bio={'Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio Test bio'}
                        />
                <Use/>
            </header>
        </div>
    );
}

