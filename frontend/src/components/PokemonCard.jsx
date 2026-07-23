import { useEffect, useState } from "react";
import getPokeData from "../api/getPokemonData"; // adjust path to your file
import "../styles/pokemoncard.css";

export default function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      setLoading(true);
      setError("");

      const data = await getPokeData(name);

      if (!data) {
        setError("Pokemon not found");
      } else {
        setPokemon(data);
      }

      setLoading(false);
    }

    loadPokemon();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name.toUpperCase()}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />

      <h3>Type</h3>
      <ul>
        {pokemon.types.map((t) => (
          <li key={t.type.name}>{t.type.name}</li>
        ))}
      </ul>

      <h3>Stats</h3>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
