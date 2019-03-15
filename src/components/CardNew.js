import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { addCard as addCardAction } from 'src/src/actions/cards'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'
import TextField from './TextField'

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    margin: 20,
  }
})

class CardNew extends React.PureComponent {
  static navigationOptions = {
    title: 'Add Card',
  }
  state = {
    question: '',
    answer: '',
  }

  onAddCard = async () => {
    const deckId = this.props.navigation.getParam('deckId')
    const { question, answer } = this.state
    const deck = await this.props.addCard(
      deckId,
      question,
      answer,
    )
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={commonStyles.center}>
        <TextField
          label="Question"
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <TextField
          label="Answer"
          style={styles.input}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <Button
          title="Create Card"
          style={styles.button}
          onPress={this.onAddCard}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (deckId, question, answer) => dispatch(addCardAction(
      deckId, question, answer
    )),
  }
}

export default connect(null, mapDispatchToProps)(CardNew)