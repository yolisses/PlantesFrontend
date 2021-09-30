import {api} from 'api';
import {auth} from 'auth/auth';
import {observable} from 'mobx';

export const chats = observable({});

export async function pushMessage({text, chat}) {
  try {
    const fakeId = Math.random();
    const {_id: id} = chat;
    const message = {
      text,
      _id: fakeId,
      chatId: chat._id,
      status: 'sending',
      userId: auth.userId,
    };
    console.error();
    chats[id].messages.unshift(message);
    //   api
    //     .post('/sendmessage', message)
    //     .then(res => {
    //       const message = res.data;
    //       console.error(message.text);
    //     })
    //     .catch(err => console.error(JSON.stringify(err)));
  } catch (err) {
    console.error(err);
  }
}
