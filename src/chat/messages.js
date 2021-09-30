import {api} from 'api';
import {auth} from 'auth/auth';
import {observable} from 'mobx';

export const messagesData = observable({
  sendingMessages: {},
  messages: [],
});

export async function pushMessage({chatId, chat, text, toUserId}) {
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
      chat.messages.unshift(message);
      delete messagesData.sendingMessages[fakeId];
    })
    .catch(err => console.error(JSON.stringify(err.response)));
}
