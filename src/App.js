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

  const nextCard = (buttonType) => {
    let next = name.id + 1;
    let prev = name.id - 1;
    if (buttonType === 1) {
      next === 101
        ? setValue(`https://pokeapi.co/api/v2/pokemon/1/`)
        : setValue(`https://pokeapi.co/api/v2/pokemon/${next}/`);
    }
    if (buttonType === 2) {
      prev === 0
        ? setValue(`https://pokeapi.co/api/v2/pokemon/100/`)
        : setValue(`https://pokeapi.co/api/v2/pokemon/${prev}/`);
    }
  };

  return (
    <div className="App">
      <div>
        <Select listOfPokemon={listOfPokemon} onChange={onSelectChange} value={value} />
        <Card name={name} />
      </div>
      <Buttons onClick={nextCard} />
    </div>
  );
};

export default App;
