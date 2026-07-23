let url = "https://pokeapi.co/api/v2/pokemon/";

const getPokeData = async (name) => {
  try {
    const req = await fetch(url + name.toLowerCase());
    const data = await req.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Pokemon not found:", err);
  }
};

export default getPokeData;