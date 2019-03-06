import {
  loadCards as loadCardsFromStorage,
  addCard as addCardFromStorage,
} from "../utils/storage/cards"

const LOAD_CARDS = 'LOAD_CARDS'
const ADD_CARD = 'ADD_CARD'

const actionLoadCards = (cards) => {
  return {
    type: LOAD_DECKS,
    cards,
  }
}

const actionAddCard = (card) => {
  return {
    type: ADD_CARD,
    card,
  }
}

const loadCards = () => async (dispatch, getState) => {
  try {
    const cards = await loadCardsFromStorage()
    dispatch(actionLoadCards(cards))
    return cards
  } catch (error) {
    console.warn('Error in loadCards', e)
    return null
  }
}

const addCard = (deckId, question, answer) => async (dispatch, getState) => {
  try {
    const card = await addCardFromStorage(deckId, question, answer)
    dispatch(actionAddCard(card))
    return card
  } catch (error) {
    console.warn('Error in addCard', e)
    return null
  }
}

export {
  LOAD_CARDS,
  ADD_CARD,
  loadCards,
  addCard,
}
