import {api} from 'api';
import {auth} from 'auth/auth';
import {observable} from 'mobx';

export const messagesData = observable({
  adtionalMessages: {},
  sendingMessages: {},
});

export function cleanAdtionalMessages() {
  for (let key in messagesData.adtionalMessages) {
    delete messagesData.adtionalMessages[key];
  }
}

export async function pushMessage({chatId, text, toUserId}) {
  const fakeId = Math.random();
  const message = {
    text,
    chatId,
    toUserId,
    _id: fakeId,
    status: 'sending',
    userId: auth.userId,
  };
  messagesData.sendingMessages[fakeId] = message;
  api
    .post('/send-message', message)
    .then(res => {
      const message = res.data;
      messagesData.adtionalMessages[fakeId] = message;
      delete messagesData.sendingMessages[fakeId];
    })
    .catch(err => console.error(JSON.stringify(err.response)));
}
