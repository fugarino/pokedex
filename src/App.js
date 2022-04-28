import React, { useEffect, useState } from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
import "./App.scss";

const App = () => {
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [value, setValue] = useState("https://pokeapi.co/api/v2/pokemon/1/");
  const [name, setName] = useState({});
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  useEffect(() => {
    const getListOfPokemon = async () => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => setListOfPokemon(res.results));
    };
    getListOfPokemon();
  }, []);

  useEffect(() => {
    const getIndividualPokemon = async () => {
      fetch(value)
        .then((res) => res.json())
        .then((res) => setName(res));
    };
    getIndividualPokemon();
  }, [value]);

  const onSelectChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <Select listOfPokemon={listOfPokemon} onChange={onSelectChange} value={value} />
        <Card name={name} />
      </div>
      <Buttons />
    </div>
  );
};

export default App;
