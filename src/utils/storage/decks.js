import {AsyncStorage} from 'react-native'

const loadDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem('decks');
    if (decks === null) {
      return {}
    }
    return decks
  } catch (error) {
    return {}
  }
}

export {
  loadDecks,
}
