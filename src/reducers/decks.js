import {
  LOAD_DECKS,
  ADD_DECK,
} from 'src/src/actions/decks'

const decks = (state = {}, action) => {
  switch (action.type) {
    case LOAD_DECKS:
      return action.decks
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck,
        }
      }
    default:
      return state
  }
}

export default decks