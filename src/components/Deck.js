import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    flex: 1,
    fontSize: 22,
    color: '#444',
    padding: 25,
  },
  cardsCounter: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#777',
    margin: 5,
  },
})

const Deck = ({ deck, onGoToDeckDetail }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onGoToDeckDetail}
  >
    <Text style={styles.title}>{deck.title}</Text>
    <Text style={styles.cardsCounter}>
      {deck.cardIds.length} cards
    </Text>
  </TouchableOpacity>
)

export default Deck
