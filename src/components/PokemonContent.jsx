import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

function PokemonContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((dat) => {
        if (dat) {
          setData(dat);
        }
      });
  }, []);

  function mostrarDatos() {
    if (!data) {
      return <div>No hay elementos</div>;
    } else {
      return data.results.map((d, i) => <Pokemon key={i} url={d.url} />);
    }
  }

  return <div className="pokemon-content container">{mostrarDatos()}</div>;
}

export default PokemonContent;
