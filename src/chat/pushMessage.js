import {api} from 'api';
import {auth} from 'auth/auth';

export async function pushMessage({chat, text, toUserId}) {
  try {
    const fakeId = Math.random();
    const chatId = chat && !chat.fake ? chat._id : undefined;
    const message = {
      text,
      chatId,
      toUserId,
      _id: fakeId,
      status: 'sending',
      userId: auth.userId,
    };
    chat.sendingMessages[fakeId] = message;
    await api.post('/send-message', message).then(res => {
      chat.messages.unshift(res.data);
      delete chat.sendingMessages[fakeId];
    });
  } catch (err) {
    console.error(err);
  }
}
