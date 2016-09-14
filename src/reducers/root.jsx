import { combineReducers } from 'redux';
import BookListReducer from './reducer-book-list';
import BookSelectReducer from './reducer-book-select';

const rootReducer = combineReducers({
  books: BookListReducer,
  selectedBook: BookSelectReducer
});

export default rootReducer;