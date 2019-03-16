import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'src/src/reducers'
import middleware from 'src/src/middleware'
import NotificationManager from 'src/src/components/NotificationManager'
import AppContainer from 'src/src/components/AppContainer'

const store = createStore(
  reducer,
  middleware,
)

const Root = () => (
  <Provider store={store}>
    <NotificationManager />
    <AppContainer />
  </Provider>
)

export default Root