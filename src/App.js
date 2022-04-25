import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
