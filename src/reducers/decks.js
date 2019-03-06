import {
  LOAD_DECKS,
  ADD_DECK,
} from 'src/src/actions/decks'
import {
  ADD_CARD,
} from 'src/src/actions/cards'

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
    case ADD_CARD:
      const deck = state[action.card.deckId]
      return {
        ...state,
        [deck.id]: {
          ...deck,
          cardIds: [
            ...deck.cardIds,
            action.card.id,
          ],
        }
      }
    default:
      return state
  }
}

export default decks