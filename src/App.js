import logo from "./logo.svg";
import "./App.css";
import A from "./component/A";
import Example from "./component/Example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <A />
        <Example />
      </header>
    </div>
  );
}

export default App;
