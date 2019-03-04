import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import commonStyles from 'src/src/utils/commonStyles'

class QuizResult extends React.PureComponent {
  render() {
    return (
      <View style={commonStyles.center}>
        <Text>QuizResult</Text>
        <Button
          title="go to DeckList"
          onPress={() => this.props.navigation.navigate('DeckList')}
        />
      </View>
    )
  }
}

export default QuizResult