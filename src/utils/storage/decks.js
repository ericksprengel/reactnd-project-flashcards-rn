import { AsyncStorage } from 'react-native'
import uuidv4 from 'uuid/v4'

const KEY_DECKS = 'decks'

const loadDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(KEY_DECKS)
    if (decks === null) {
      return {}
    }
    return JSON.parse(decks)
  } catch (error) {
    console.warn('storage/loadDecks failed', error)
    return {}
  }
}

const addDeck = async (title) => {
  try {
    const deck = {
      id: uuidv4(),
      title,
      cardIds: [],
    }
    const decks = await loadDecks()

    await AsyncStorage.setItem(KEY_DECKS, JSON.stringify({
      ...decks,
      [deck.id]: deck,
    }))

    return deck
  } catch (error) {
    console.warn('storage/addDeck failed', error)
    return null
  }
}

const addCardIdToDeck = async (deckId, cardId) => {
  try {
    const decks = await loadDecks()
    const deck = decks[deckId]

    await AsyncStorage.setItem(KEY_DECKS, JSON.stringify({
      ...decks,
      [deck.id]: {
        ...deck,
        cardIds: [
          ...deck.cardIds,
          cardId,
        ]
      },
    }))

    return deck
  } catch (error) {
    console.warn('storage/addCardIdToDeck failed', error)
    return null
  }
}

export {
  loadDecks,
  addDeck,
  addCardIdToDeck,
}
