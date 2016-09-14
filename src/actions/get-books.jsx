import axios from 'axios';

export default function getBooks(term) {
  var apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${term}`;
  return {
    type: 'GET_BOOKS',
    payload: axios.get(apiUrl)
  };
}
