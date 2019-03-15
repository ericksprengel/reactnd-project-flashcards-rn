import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { addDeck as addDeckAction } from 'src/src/actions/decks'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'

const styles = StyleSheet.create({
  inputLabel: {
    marginHorizontal: 20,
    fontSize: 24,
    alignSelf: 'flex-start',
  },
  input: {
    padding: 20,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    margin: 20,
  }
})
class DeckNew extends React.PureComponent {
  state = {
    title: '',
  }

  onAddDeck = async () => {
    const deck = await this.props.addDeck(this.state.title)
    this.props.navigation.replace(
      'DeckDetail',
      {deckId: deck.id},
    )
  }

  render() {
    return (
      <View style={commonStyles.center}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Button
          style={styles.button}
          title="Create Deck"
          onPress={this.onAddDeck}
          disabled={!this.state.title}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDeck: (title) => dispatch(addDeckAction(title)),
  }
}

export default connect(null, mapDispatchToProps)(DeckNew)