import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import R from 'ramda'
import { loadCards as loadCardsAction} from 'src/src/actions/cards'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'


const styles = StyleSheet.create({
  buttonShowAnswer: {
    margin: 10,
  },
  buttonCorrect: {
    margin: 10,
    flex: 1,
  },
  buttonWrong: {
    margin: 10,
    flex: 1,
    backgroundColor: '#C51924',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
})

const Card = ({ card, showAnswer }) => (
  <Fragment>
    { !showAnswer
      ? <Text>{card.question}</Text>
      : <Text>{card.answer}</Text>
    }
  </Fragment>
)

class Quiz extends React.PureComponent {
  state = {
    questionIndex: 0,
    score: 0,
    showAnswer: false,
  }

  componentDidMount() {
    this.props.loadCards()
  }

  onShowAnswer = () => {
    this.setState({
      showAnswer: true,
    })
  }

  onNextCard = (isCorrect) => {
    const { cards, deck } = this.props
    const {
      questionIndex,
      score,
    } = this.state

    const updatedScore = isCorrect
      ? score + 1
      : score
    const nextQuestionIndex = questionIndex + 1

    if (nextQuestionIndex === cards.length) {
      this.props.navigation.replace('QuizResult', {
        deckId: deck.id,
        score: updatedScore,
      })
      return
    }

    this.setState({
      questionIndex: nextQuestionIndex,
      showAnswer: false,
      score: updatedScore,
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
      showAnswer,
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
        <Card
          card={card}
          showAnswer={showAnswer}
        />
        { !showAnswer
          ? (
            <Button
              style={styles.buttonShowAnswer}
              title="Show Answer"
              onPress={this.onShowAnswer}
            />
          )
          : (
            <View style={styles.actionsContainer}>
              <Button
                style={styles.buttonCorrect}
                title="Correct"
                onPress={() => this.onNextCard(true)}
              />
              <Button
                style={styles.buttonWrong}
                title="Wrong"
                onPress={() => this.onNextCard(false)}
              />
            </View>
          )
        }
      </View>
    )
  }
}

mapStateToProps = ( {decks, cards }, { navigation }) => {
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