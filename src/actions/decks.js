import {
  loadDecks as loadDecksFromStorage,
  addDeck as addDeckFromStorage,
} from "../utils/storage/decks"

const LOAD_DECKS = 'LOAD_DECKS'
const ADD_DECK = 'ADD_DECK'

const actionLoadDecks = (decks) => {
  return {
    type: LOAD_DECKS,
    decks,
  }
}

const actionAddDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
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

const addDeck = (title) => {
  return async (dispatch, getState) => {
    try {
      const deck = await addDeckFromStorage(title)
      dispatch(actionAddDeck(deck))
    } catch (error) {
      console.warn('Error in loadDecks', e)
    }
  }
}

export {
  LOAD_DECKS,
  ADD_DECK,
  loadDecks,
  addDeck,
}
