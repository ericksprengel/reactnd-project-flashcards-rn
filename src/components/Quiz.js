import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Text,
  View,
} from 'react-native'
import R from 'ramda'
import { loadCards as loadCardsAction} from 'src/src/actions/cards'
import commonStyles from 'src/src/utils/commonStyles'

class Quiz extends React.PureComponent {
  state = {
    questionIndex: 0,
    score: 0,
  }

  componentDidMount() {
    this.props.loadCards()
  }

  onNextCard = () => {
    const { cards } = this.props
    const {
      questionIndex,
      score,
    } = this.state

    const nextQuestionIndex = questionIndex + 1
    if (nextQuestionIndex === cards.length) {
      this.props.navigation.navigate('QuizResult', {
        score,
      })
      return
    }

    this.setState({
      questionIndex: nextQuestionIndex,
    })
  }

  render() {
    const {
      deck,
      cards,
      loading,
    } = this.props
    const {
      questionIndex,
    } = this.state

    if (loading) {
      // it's too fast to load cards from AsyncStorage
      // it just shows an empty screen to avoid strange
      // behavior
      return <Fragment />
    }

    const card = cards[questionIndex]
    return (
      <View style={commonStyles.center}>
        <Text>{`${deck.title} - ${questionIndex + 1}/${cards.length}`}</Text>
        <Text>{card.question}</Text>
        <Text>{card.answer}</Text>
        <Button
          title="next"
          onPress={this.onNextCard}
        />
      </View>
    )
  }
}

mapStateToProps = (state, { navigation }) => {
  const { decks, cards } = state
  const deck = decks[navigation.getParam('deckId')]
  const loading = R.isEmpty(cards)

  const deckCards = loading
    ? null
    : deck.cardIds.map( cardId => cards[cardId])

  return {
    deck,
    cards: deckCards,
    loading,
  }
}

mapDispatchToProps = dispatch => {
  return {
    loadCards: () => dispatch(loadCardsAction()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)