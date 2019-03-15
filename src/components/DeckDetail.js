import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'

const styles = StyleSheet.create({
  deckCard: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 48,
    color: '#444',
    padding: 20,
  },
  cardsCounter: {
    fontSize: 14,
    color: '#777',
    alignSelf: 'flex-end',
  },
  button: {
    margin: 10,
  }
})
class DeckDetail extends React.PureComponent {

  onGoToNewCard = () => {
    this.props.navigation.navigate('CardNew', {
      deckId: this.props.deck.id,
    })
  }

  onStartQuiz = () => {
    this.props.navigation.navigate('Quiz', {
      deckId: this.props.deck.id,
    })
  }

  render() {
    const { deck } = this.props
    return (
      <View style={commonStyles.center}>
        <View
          style={styles.deckCard}
        >
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardsCounter}>
            {deck.cardIds.length} cards
          </Text>
        </View>
        <Button
          style={styles.button}
          type="outlined"
          title="Create New Question"
          onPress={this.onGoToNewCard}
        />
        <Button
          title="Start a Quiz"
          onPress={this.onStartQuiz}
          disabled={deck.cardIds.length === 0}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  return {
    deck: decks[navigation.getParam('deckId')]
  }
}
export default connect(mapStateToProps)(DeckDetail)