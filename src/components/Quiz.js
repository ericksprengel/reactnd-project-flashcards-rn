import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import commonStyles from 'src/src/utils/commonStyles'

class Quiz extends React.PureComponent {
  render() {
    return (
      <View style={commonStyles.center}>
        <Text>Quiz</Text>
        <Button
          title="go to QuizResult"
          onPress={() => this.props.navigation.navigate('QuizResult')}
        />
      </View>
    )
  }
}

export default Quiz