import React from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div>
        <Select />
        <Card />
      </div>
      <Buttons />
    </div>
  );
};

export default App;
