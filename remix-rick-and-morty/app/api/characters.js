async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  return res.json();
}

export default getCharacters;
