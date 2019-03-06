import {
  LOAD_CARDS,
  ADD_CARD,
} from 'src/src/actions/cards'

const cards = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return action.cards
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: {
          ...action.card,
        }
      }
    default:
      return state
  }
}

export default cards