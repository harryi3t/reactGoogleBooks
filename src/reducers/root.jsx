import { combineReducers } from 'redux';
import BookListReducer from './reducer-book-list';

const rootReducer = combineReducers({
  books: BookListReducer
});

export default rootReducer;