import styles from "./index.module.css";

const PokemonSearch = () => {
  return (
    <div className={styles.pokemonSearchForm}>
      <div>Search for your pokemon:</div>
      <form>
        <input
          type="text"
          name="pokemonSearch"
          className={styles.pokemonSearchField}
        />
      </form>
    </div>
  );
};

export default PokemonSearch;
