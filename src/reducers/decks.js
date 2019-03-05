import {
  LOAD_DECKS,
} from 'src/src/actions/decks'

const decks = (state = {}, action) => {
  switch (action.type) {
    case LOAD_DECKS:
      return action.decks
    default:
      return state
  }
}

export default decks