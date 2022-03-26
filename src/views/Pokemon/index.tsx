import PokemonCard from "../../components/PokemonCard";

import styles from "./index.module.css";

const Pokemon = () => {
  return (
    <div className={styles.pokemon}>
      <PokemonCard id={1} />
    </div>
  );
};

export default Pokemon;
