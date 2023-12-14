import "./App.css";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {data.map((ele, index) => (
        <Card {...ele} key={index} />
      ))}
      <Modal />
    </div>
  );
}

export default App;
