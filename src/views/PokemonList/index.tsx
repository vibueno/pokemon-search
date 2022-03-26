import { useState, useEffect } from "react";
import styles from "./index.module.css";
import axios from "axios";

import PokemonListItem from "../../components/PokemonListItem";

type PokemonList = [Pokemon];

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonList>();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => setPokemonList(response.data.results));
  }, []);

  return (
    <div className={styles.pokemonList}>
      {pokemonList &&
        pokemonList.map((pokemon: Pokemon, index) => (
          <PokemonListItem pokemon={pokemon} key={index} />
        ))}
    </div>
  );
};

export default PokemonList;
