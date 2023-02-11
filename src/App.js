import "./App.css";
import Content from "./components/content/Content";
import Forms from "./components/Form/Forms";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Forms />
      <Content />
      <Teams />
    </div>
  );
}

export default App;
