import styles from "./index.module.css";

import PokemonListItem from "../../components/PokemonListItem";

type PokemonListProps = {
  pokemonList: Pokemon[];
  currentPokemon: number;
  clickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const PokemonList = ({
  pokemonList,
  currentPokemon,
  clickHandler,
}: PokemonListProps) => {
  return (
    <ul className={styles.pokemonList}>
      {pokemonList &&
        pokemonList.map((pokemon: Pokemon, index: number) => (
          <PokemonListItem
            currentPokemon={currentPokemon}
            pokemon={pokemon}
            key={index}
            clickHandler={clickHandler}
          />
        ))}
    </ul>
  );
};

export default PokemonList;
