import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import commonStyles from 'src/src/utils/commonStyles'

const QuizResultBar = ({ score, total }) => {
  const styles = StyleSheet.create({
    container: {
      margin: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    score: {
      fontSize: 28,
      marginRight: 10,
    },
    barContainer: {
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'row',
    },
    correctAnswersStyle: {
      backgroundColor: '#0f0',
      flex: score,
    },
    wrongAnswersStyle: {
      backgroundColor: '#f00',
      flex: total - score,
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        {(score*100/total).toFixed(2)}%
      </Text>
      <View style={styles.barContainer}>
        <View style={styles.correctAnswersStyle} />
        <View style={styles.wrongAnswersStyle} />
      </View>
    </View>
  )
}

class QuizResult extends React.PureComponent {
  render() {
    const { deck } = this.props
    const score = this.props.navigation.getParam('score')
    const total = deck.cardIds.length
    const message = score == total
      ? 'Perfect!'
      : 'Try again...'
    return (
      <View style={commonStyles.center}>
        <Text>{message}</Text>
        <QuizResultBar
          score={score}
          total={total}
        />
        <Button
          title="go to DeckList"
          onPress={() => this.props.navigation.navigate('DeckList')}
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
