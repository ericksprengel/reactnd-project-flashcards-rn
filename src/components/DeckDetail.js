import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import commonStyles from 'src/src/utils/commonStyles'

class DeckDetail extends React.PureComponent {
  render() {
    const { deck } = this.props
    return (
      <View style={commonStyles.center}>
        <Text>DeckDetail - {deck.title}</Text>
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

const mapStateToProps = ({ decks }, { navigation }) => {
  return {
    deck: decks[navigation.getParam('deckId')]
  }
}
export default connect(mapStateToProps)(DeckDetail)