import React from 'react'
import {
  Button,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { loadDecks } from 'src/src/actions/decks'
import commonStyles from 'src/src/utils/commonStyles'
import Deck from './Deck'

class DeckList extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Deck List',
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('DeckNew')}
        style={{paddingHorizontal: 15}}
      >
        <Ionicons name="md-add" size={32} color="#000" />
      </TouchableOpacity>
    ),
  })

  componentDidMount() {
    this.props.dispatch(loadDecks())
  }

  deckKeyExtractor = (deck, index) => deck.id

  onGoToDeckDetail = (deck) => {
    this.props.navigation.navigate(
      'DeckDetail',
      {deckId: deck.id},
    )
  }

  renderDeck = ({ item }) => (
    <Deck
      deck={item}
      onGoToDeckDetail={() => this.onGoToDeckDetail(item)}
    />
  )

  render() {
    const { decks } = this.props
    return (
      <FlatList
        data={decks}
        keyExtractor={this.deckKeyExtractor}
        renderItem={this.renderDeck}
      />
    )
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: Object.values(decks)
  }
}
export default connect(mapStateToProps)(DeckList)