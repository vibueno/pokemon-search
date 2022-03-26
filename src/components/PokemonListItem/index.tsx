import styles from "./index.module.css";

type PokemonListItemProps = {
  pokemon: Pokemon;
};

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  return <div className={styles.pokemonListItem}>{pokemon.name}</div>;
};

export default PokemonListItem;
