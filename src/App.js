// Hooks
import { useState } from "react";
// CSS
import "./App.css";
// Components
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
// Data
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {data.map((ele) => (
        <Card {...ele} key={ele.id} />
      ))}
    </div>
  );
}

export default App;
