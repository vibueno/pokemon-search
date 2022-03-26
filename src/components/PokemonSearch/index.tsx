import styles from "./index.module.css";

type PokemonSearchProps = {
  searchValue: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PokemonSearch = ({
  searchValue,
  onChangeHandler,
}: PokemonSearchProps) => {
  return (
    <div className={styles.pokemonSearchForm}>
      <div>Search for your pokemon:</div>
      <form>
        <input
          type="text"
          name="pokemonSearch"
          className={styles.pokemonSearchField}
          value={searchValue}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
};

export default PokemonSearch;
