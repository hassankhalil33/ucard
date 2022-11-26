const { Expo } = require("expo-server-sdk");

const myNotifications = (somePushTokens) => {
let expo = new Expo({});
let messages = [];
for (let pushToken of somePushTokens) {
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
    continue;
  }

  messages.push({
    to: pushToken,
    sound: 'default',
    title: 'Ucard',
    body: 'You Have Been Matched!'
  })
}

let chunks = expo.chunkPushNotifications(messages);
(async () => {
  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
    } catch (error) {
      console.error(error);
    }
  }
})();
}

module.exports = {
  myNotifications
}
