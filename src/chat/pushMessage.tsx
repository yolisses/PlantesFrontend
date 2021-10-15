import {api} from 'api';
import {auth} from 'auth/auth';

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
  chat.sendingMessages[fakeId] = message;
  api
    .post('/send-message', message)
    .then(res => {
      chat.messages.unshift(res.data);
      delete chat.sendingMessages[fakeId];
    })
    .catch(err => console.error(JSON.stringify(err.response)));
}
