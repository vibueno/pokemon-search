import PokemonList from "../PokemonList";
import Pokemon from "../Pokemon";

import styles from "./index.module.css";

const Main = () => (
  <main className={styles.main}>
    <PokemonList />
    <Pokemon />
  </main>
);

export default Main;
