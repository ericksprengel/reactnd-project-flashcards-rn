import {
  loadDecks as loadDecksFromStorage,
} from "../utils/storage/decks"

const LOAD_DECKS = 'LOAD_DECKS'

const actionLoadDecks = (decks) => {
  return {
    type: LOAD_DECKS,
    decks,
  }
}

const loadDecks = () => {
  return async (dispatch, getState) => {
    try {
      const decks = await loadDecksFromStorage()
      dispatch(actionLoadDecks(decks))
    } catch (error) {
      console.warn('Error in loadDecks', e)
    }
  }
}

export {
  LOAD_DECKS,
  loadDecks,
}
