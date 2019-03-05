import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { addDeck as addDeckAction } from 'src/src/actions/decks'
import commonStyles from 'src/src/utils/commonStyles'

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: 'stretch',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
})
class DeckNew extends React.PureComponent {
  state = {
    title: '',
  }

  onAddDeck = () => {
    this.props.addDeck(this.state.title)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={commonStyles.center}>
        <Text>DeckNew</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
        />
        <Button
          title="Add"
          onPress={this.onAddDeck}
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