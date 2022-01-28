import logo from "./logo.svg";
import "./App.css";
import Learn from "./components/Hello";
import Learning from "./components/Learning";
import Hook from "./components/Hook";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Learn></Learn>
        
        <Hook></Hook>
      </header>
    </div>
  );
}

export default App;
