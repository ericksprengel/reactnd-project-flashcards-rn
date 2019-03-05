import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import commonStyles from 'src/src/utils/commonStyles'

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#444',
  },
  cardsCounter: {
    fontSize: 14,
    color: '#777',
    margin: 5,
  },
})
class DeckDetail extends React.PureComponent {
  render() {
    const { deck } = this.props
    return (
      <View style={commonStyles.center}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cardsCounter}>{deck.cardIds.length} cards</Text>
        <Button
          title="Add Card"
          onPress={() => this.props.navigation.navigate('CardNew')}
        />
        <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
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