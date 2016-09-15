export default function (state = [], action) {
  switch (action.type) {
  case 'GET_BOOKS':
    return action.payload.data.items || state;
  default:
    return state;
  }
}
