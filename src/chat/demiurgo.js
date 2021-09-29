import {api} from 'api';
import {auth} from 'auth/auth';
import {observable} from 'mobx';

export const messages = observable({
  allMessages: {},
  addedMessages: {},
  sendingMessages: {},
});

export function cleanAddedMessages() {
  for (let key in messages.addedMessages) {
    delete messages.addedMessages[key];
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
  messages.sendingMessages[fakeId] = message;
  api
    .post('/sendmessage', message)
    .then(res => {
      const message = res.data;
      messages.addedMessages[fakeId] = message;
      delete messages.sendingMessages[fakeId];
    })
    .catch(err => console.error(JSON.stringify(err.response)));
}
