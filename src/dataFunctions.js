export const filterByType = (pokemons, condition) => {
  const pokemonFiltered = pokemons.filter((pokemon) =>
    pokemon.type.includes(condition)
  );
  return pokemonFiltered;
};
