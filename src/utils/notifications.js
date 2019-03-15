
import { Notifications } from 'expo'


const scheduleNotification = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync()
  const localnotification = {
    title: 'It\'s time to pratice!',
    body: `Complete you daily quiz.`,
    android: {
      sound: true,
    },
    ios: {
      sound: true,
    },
  }

  const schedulingOptions = {
    time: Date.now() + 24*60*1000,
  }
  return Notifications.scheduleLocalNotificationAsync(
    localnotification,
    schedulingOptions,
  )
}

export {
  scheduleNotification,
}