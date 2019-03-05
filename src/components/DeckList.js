import React from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import commonStyles from 'src/src/utils/commonStyles'

class DeckList extends React.PureComponent {
  render() {
    console.log(this.props.decks)
    return (
      <View style={commonStyles.center}>
        <Text>DeckList</Text>
        <Button
          title="go to DeckNew"
          onPress={() => this.props.navigation.navigate('DeckNew')}
        />
        <Button
          title="go to DeckDetail"
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ decks }) => {
  return {
    decks: Object.values(decks)
  }
}
export default connect(mapStateToProps)(DeckList)