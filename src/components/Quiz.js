import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import R from 'ramda'
import { loadCards as loadCardsAction} from 'src/src/actions/cards'
import { scheduleNotification } from 'src/src/utils/notifications'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'


const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: '#333',
    alignSelf: 'center',
    margin: 20,
  },
  progress: {
    fontSize: 22,
    color: '#777',
    margin: 20,
  },
  buttonShowAnswer: {
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 40,
  },
  buttonCorrect: {
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 40,
    flex: 1,
  },
  buttonWrong: {
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 40,
    flex: 1,
    backgroundColor: '#C51924',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
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
})

const Card = ({ card, showAnswer }) => (
  <View style={styles.deckCard}>
    { !showAnswer
      ? <Text>{card.question}</Text>
      : <Text>{card.answer}</Text>
    }
  </View>
)

class Quiz extends React.PureComponent {
  static navigationOptions = {
    title: 'Quiz',
  }
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
      scheduleNotification()
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
      <View style={{flex: 1}}>
        <Text style={styles.title}>
          {deck.title}
        </Text>
        <View style={
          [commonStyles.center,
          {flex: 1}
        ]}>
          <Card
            card={card}
            showAnswer={showAnswer}
          />
          <Text style={styles.subtitle}>
            {`${questionIndex + 1}/${cards.length}`}
          </Text>
        </View>
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