import PokemonCard from "../../components/PokemonCard";

import styles from "./index.module.css";

type PokemonProps = {
  id: number;
};

const Pokemon = ({ id }: PokemonProps) => {
  return (
    <div className={styles.pokemon}>
      <PokemonCard id={id} />
    </div>
  );
};

export default Pokemon;
