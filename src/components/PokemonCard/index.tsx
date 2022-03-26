import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./index.module.css";

type PokemonCardProps = {
  id: number;
};

const PokemonCard = ({ id }: PokemonCardProps) => {
  const [pokemonData, setPokemonData] = useState<Partial<PokemonData>>({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      setPokemonData({
        name: response.data.name,
        base_experience: response.data.base_experience,
        height: response.data.height,
      })
    );
  }, [id]);

  return (
    <div className={styles.pokemonCard}>
      <div className={styles.pokemonCardItem}>
        <strong>Name: </strong>
        {pokemonData.name}
      </div>
      <div className={styles.pokemonCardItem}>
        <strong>Base Experience: </strong>
        {pokemonData.base_experience}
      </div>
      <div className={styles.pokemonCardItem}>
        <strong>Height: </strong>
        {pokemonData.height}
      </div>
    </div>
  );
};

export default PokemonCard;
