const getEntities = (state) => state.entities;

export const getBookshelves = (state) => getEntities(state).bookshelves;
export const getBookshelvesById = (state, id) => getBookshelves(state)[id];
