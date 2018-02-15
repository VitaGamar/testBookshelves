import { combineReducers } from 'redux';
import bookshelvesReducer from './bookshelvesReducer';
import booksReducer from './booksReducer';

const counterApp = combineReducers({
  bookshelves: bookshelvesReducer,
  books: booksReducer
});

export default counterApp;
