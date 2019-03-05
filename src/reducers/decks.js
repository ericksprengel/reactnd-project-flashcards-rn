
const initialState = {
  x1234: {
    id: 'x1234',
    title: 'Animais',
  },
  x2345: {
    id: 'x2345',
    title: 'Heróis',
  }
}
const decks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return {
        ...state,
        x12345: {
          id: x12345,
          title: action.title,
        }
      }
    default:
      return state
  }
}

export default decks