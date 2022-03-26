import { useState, useMemo, useEffect } from "react";

import axios from "axios";

import PokemonList from "../PokemonList";
import Pokemon from "../Pokemon";

import PokemonSearch from "../../components/PokemonSearch";

import styles from "./index.module.css";

const Main = () => {
  const [currentPokemon, setCurrentPokemon] = useState(1);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  const [pokemonSearch, setPokemonSearch] = useState("");

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    setCurrentPokemon(parseInt(target.id));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    setPokemonSearch(target.value);
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  const pokemonListSearch = useMemo<Pokemon[]>(
    () =>
      pokemonList?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase())
      ) || [],
    [pokemonSearch]
  );

  return (
    <main className={styles.main}>
      <PokemonSearch
        searchValue={pokemonSearch}
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e)
        }
      />
      <PokemonList
        clickHandler={onClickHandler}
        currentPokemon={currentPokemon}
        pokemonList={pokemonListSearch}
      />
      <Pokemon id={currentPokemon} />
    </main>
  );
};

export default Main;
