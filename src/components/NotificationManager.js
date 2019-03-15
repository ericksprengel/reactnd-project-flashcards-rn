import React, { Fragment, PureComponent } from 'react'
import { Alert } from 'react-native'
import { Notifications, Permissions } from 'expo'

const getiOSNotificationPermission = async () => {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

class NotificationManager extends PureComponent {
  listenForNotifications = async () => {
    this.subscription = await Notifications.addListener(notification => {
      console.log('received not: ', notification)
      if (notification.origin === 'received') {
        Alert.alert(
          'It\'s time to pratice!',
          'Complete you daily exercise'
        )
      }
    })
  }

  componentWillMount() {
    getiOSNotificationPermission()
    this.listenForNotifications()
  }

  render() {
    return (
      <Fragment />
    )
  }
}

export default NotificationManager