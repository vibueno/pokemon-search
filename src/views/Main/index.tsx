import { useState } from "react";

import PokemonList from "../PokemonList";
import Pokemon from "../Pokemon";

import styles from "./index.module.css";

const Main = () => {
  const [currentPokemon, setCurrentPokemon] = useState(1);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    setCurrentPokemon(parseInt(target.id));
  };

  return (
    <main className={styles.main}>
      <PokemonList
        clickHandler={onClickHandler}
        currentPokemon={currentPokemon}
      />
      <Pokemon id={currentPokemon} />
    </main>
  );
};

export default Main;
