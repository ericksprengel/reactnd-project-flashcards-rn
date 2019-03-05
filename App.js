import React from "react"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { createStackNavigator, createAppContainer } from "react-navigation"
import reducer from 'src/src/reducers'
import middleware from 'src/src/middleware'
import DeckList from 'src/src/components/DeckList'
import DeckNew from 'src/src/components/DeckNew'
import DeckDetail from 'src/src/components/DeckDetail'
import CardNew from 'src/src/components/CardNew'
import Quiz from 'src/src/components/Quiz'
import QuizResult from 'src/src/components/QuizResult'

const AppNavigator = createStackNavigator(
  {
    DeckList,
    DeckNew,
    DeckDetail,
    CardNew,
    Quiz,
    QuizResult,
  },
  {
    initialRouteName: "DeckList"
  }
)

const AppContainer = createAppContainer(AppNavigator)


const store = createStore(
  reducer,
  middleware,
)

const Root = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default Root