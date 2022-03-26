import { getIdfromURL } from "../../utils";

import styles from "./index.module.css";

type PokemonListItemProps = {
  pokemon: Pokemon;
  currentPokemon: number;
  clickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const PokemonListItem = ({
  pokemon,
  currentPokemon,
  clickHandler,
}: PokemonListItemProps) => {
  return (
    <div
      id={getIdfromURL(pokemon.url)}
      className={styles.pokemonListItem}
      onClick={clickHandler}
      data-selected={parseInt(getIdfromURL(pokemon.url)) === currentPokemon}
    >
      {pokemon.name}
    </div>
  );
};

export default PokemonListItem;
