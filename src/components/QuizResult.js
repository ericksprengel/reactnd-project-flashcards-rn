import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import commonStyles from 'src/src/utils/commonStyles'
import Button from './Button'


const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    fontSize: 36,
    color: '#333',
    marginRight: 10,
  },
  score: {
    fontSize: 28,
    color: '#333',
    marginRight: 10,
  },
  barContainer: {
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4285f4',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    margin: 10,
  }
})

const QuizResultBar = ({ score, total }) => {
  const dynamicStyles = StyleSheet.create({
    correctAnswersStyle: {
      backgroundColor: '#4285f4',
      flex: score,
    },
    wrongAnswersStyle: {
      flex: total - score,
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        {(score*100/total).toFixed(2)}%
      </Text>
      <View style={styles.barContainer}>
        <View style={dynamicStyles.correctAnswersStyle} />
        <View style={dynamicStyles.wrongAnswersStyle} />
      </View>
    </View>
  )
}

class QuizResult extends React.PureComponent {
  static navigationOptions = {
    title: 'Result',
  }

  onRestartQuiz = () => {
    this.props.navigation.replace('Quiz', {
      deckId: this.props.deck.id,
    })
  }

  render() {
    const { deck } = this.props
    const score = this.props.navigation.getParam('score')
    const total = deck.cardIds.length
    const message = score == total
      ? 'Perfect!'
      : 'Try again...'
    return (
      <View style={commonStyles.center}>
        <Text style={styles.message}>{message}</Text>
        <QuizResultBar
          score={score}
          total={total}
        />
        <Button
          style={styles.button}
          type="outlined"
          title="Restart Quiz"
          onPress={this.onRestartQuiz}
        />
        <Button
          title="Back to Deck"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const deck = decks[navigation.getParam('deckId')]
  return {
    deck,
  }
}
export default connect(mapStateToProps)(QuizResult)
