import {chatsData} from 'chat/chats';

export function lookForChatByUserId(userId) {
  const chatArray = chatsData.chats.filter(
    chat => chat.users.indexOf(userId) !== -1,
  );

  if (chatArray.length) {
    return chatArray[0];
  }
  return null;
}
