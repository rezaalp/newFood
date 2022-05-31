import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
