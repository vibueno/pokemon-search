import { getIdfromURL } from "../../utils";

import styles from "./index.module.css";

type PokemonListItemProps = {
  pokemon: Pokemon;
  currentPokemon: number;
  clickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const PokemonListItem = ({
  pokemon,
  currentPokemon,
  clickHandler,
}: PokemonListItemProps) => {
  return (
    <li
      id={getIdfromURL(pokemon.url)}
      className={styles.pokemonListItem}
      onClick={clickHandler}
      data-selected={parseInt(getIdfromURL(pokemon.url)) === currentPokemon}
    >
      {pokemon.name}
    </li>
  );
};

export default PokemonListItem;
