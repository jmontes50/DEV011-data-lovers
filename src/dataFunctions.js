export const sortList = (pokemonList, order = 'asc') => {
  return pokemonList.sort((a,b) => {
    const isAsc = order === 'asc';
    if ( a.name < b.name) { return isAsc ? -1 : 1; }
    else if ( b.name < a.name ) { return isAsc ? 1 : -1 }
    return 0;
  });
}
