import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import commonStyles from 'src/src/utils/commonStyles'

class CardNew extends React.PureComponent {
  render() {
    return (
      <View style={commonStyles.center}>
        <Text>CardNew</Text>
        <Button
          title="goBack"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

export default CardNew