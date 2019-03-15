import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { addCard as addCardAction } from 'src/src/actions/cards'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'

const styles = StyleSheet.create({
  input: {
    height: 40,
    alignSelf: 'stretch',
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
})

class CardNew extends React.PureComponent {
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
        <Text>Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          value={this.state.title}
        />
        <Text>Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.title}
        />
        <Button
          title="Create Card"
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