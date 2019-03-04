import React from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"
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
);

export default createAppContainer(AppNavigator);