import React from "react";

const Select = ({ listOfPokemon, onChange, value }) => {
  return (
    <select className="Select" value={value} onChange={onChange}>
      {listOfPokemon.map((pokemon) => (
        <option key={pokemon.url} value={pokemon.url}>
          {pokemon.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
