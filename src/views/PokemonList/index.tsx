import { useState, useEffect } from "react";
import styles from "./index.module.css";
import axios from "axios";

import PokemonListItem from "../../components/PokemonListItem";

type PokemonListProps = {
  currentPokemon: number;
  clickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const PokemonList = ({ currentPokemon, clickHandler }: PokemonListProps) => {
  const [pokemonList, setPokemonList] = useState<PokemonList>();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  return (
    <div className={styles.pokemonList}>
      {pokemonList &&
        pokemonList.map((pokemon: Pokemon, index) => (
          <PokemonListItem
            currentPokemon={currentPokemon}
            pokemon={pokemon}
            key={index}
            clickHandler={clickHandler}
          />
        ))}
    </div>
  );
};

export default PokemonList;
