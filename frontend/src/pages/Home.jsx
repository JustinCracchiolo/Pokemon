import { useState } from "react";
import "../styles/home.css";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const [name, setName] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSearch = () => {
    if (!name.trim()) return;
    setShowCard(true);
  };

  return (
    <div id="home-page">
      <div className="home-container">
        <h1 id="title">Pokedex</h1>

        <input
          type="text"
          id="search-bar"
          placeholder="Insert pokemon name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleSearch} id="search-btn">
          Submit
        </button>

        {showCard && <PokemonCard name={name} />}
      </div>
    </div>
  );
}
