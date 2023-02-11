import "./App.css";
import Forms from "./components/Form/Forms";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Forms />
    </div>
  );
}

export default App;
