import {chatsData} from 'chat/chats';

export function lookForChatByUserId(userId) {
  const chatArray = Object.values(chatsData.chats).filter(chat => {
    return chat.users.indexOf(userId) !== -1 && !chat.fake;
  });

  if (chatArray.length) {
    return chatArray[0];
  }
  return null;
}
