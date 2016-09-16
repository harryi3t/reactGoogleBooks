const defaultState = {list:[], selectedBook:null};

export default function (state = defaultState, action) {
  switch (action.type) {
  case 'GET_BOOKS':
    return {
      list: action.payload.data.items || state,
      selectedBook: action.payload.data.items[0] || null
    };
  case 'SELECT_BOOK':
    return {
      list: state.list,
      selectedBook: action.payload
    };
  default:
    return state;
  }
}
