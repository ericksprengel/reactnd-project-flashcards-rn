import React from 'react'
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { loadDecks } from 'src/src/actions/decks'
import commonStyles from 'src/src/utils/commonStyles'

const DeckCard = ({ deck, onGoToDeckDetail }) => (
  <TouchableOpacity
    onPress={onGoToDeckDetail}
  >
    <Text>{deck.title}</Text>
  </TouchableOpacity>
)

class DeckList extends React.PureComponent {
  static navigationOptions = {
    title: 'Deck List',
  }

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
    <DeckCard
      deck={item}
      onGoToDeckDetail={() => this.onGoToDeckDetail(item)}
    />
  )

  render() {
    const { decks } = this.props
    return (
      <View style={commonStyles.center}>
        <FlatList
          data={decks}
          keyExtractor={this.deckKeyExtractor}
          renderItem={this.renderDeck}
        />
        <Button
          title="Create Deck"
          onPress={() => this.props.navigation.navigate('DeckNew')}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: Object.values(decks)
  }
}
export default connect(mapStateToProps)(DeckList)