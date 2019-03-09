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

const loadDecks = () => async (dispatch, getState) => {
  try {
    const decks = await loadDecksFromStorage()
    dispatch(actionLoadDecks(decks))
    return decks
  } catch (error) {
    console.warn('Error in loadDecks', error)
    return null
  }
}

const addDeck = (title) => async (dispatch, getState) => {
  try {
    const deck = await addDeckFromStorage(title)
    dispatch(actionAddDeck(deck))
    return deck
  } catch (error) {
    console.warn('Error in addDeck', error)
    return null
  }
}

export {
  LOAD_DECKS,
  ADD_DECK,
  loadDecks,
  addDeck,
}
