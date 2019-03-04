import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import commonStyles from 'src/src/utils/commonStyles'

class DeckDetail extends React.PureComponent {
  render() {
    return (
      <View style={commonStyles.center}>
        <Text>DeckDetail</Text>
        <Button
          title="go to CardNew"
          onPress={() => this.props.navigation.navigate('CardNew')}
        />
        <Button
          title="go to Quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
      </View>
    )
  }
}

export default DeckDetail