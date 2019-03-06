import { AsyncStorage } from 'react-native'
import uuidv4 from 'uuid/v4'
import { addCardIdToDeck } from './decks'

const KEY_CARDS = 'cards'

const loadCards = async () => {
  try {
    const cards = await AsyncStorage.getItem(KEY_CARDS)
    if (cards === null) {
      return {}
    }
    return JSON.parse(cards)
  } catch (error) {
    console.warn('storage/loadCards failed', error)
    return {}
  }
}

const addCard = async (deckId, question, answer) => {
  try {
    const card = {
      id: uuidv4(),
      deckId,
      question,
      answer,
    }
    const cards = await loadCards()

    await AsyncStorage.setItem(KEY_CARDS, JSON.stringify({
      ...cards,
      [card.id]: card,
    }))

    // updated cardIds in the storage
    await addCardIdToDeck(card.deckId, card.id)

    return card
  } catch (error) {
    console.warn('storage/addCard failed', error)
    return null
  }
}

export {
  loadCards,
  addCard,
}
