export default function selectBooks(book) {
  return {
    type: 'SELECT_BOOK',
    payload: book
  };
}
