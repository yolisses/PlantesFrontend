import {api} from 'api';
import {Message} from 'chat/Message';
import {BackButton} from 'publish/BackButton';
import {MessageInput} from 'chat/MessageInput';
import React, {useEffect} from 'react';
import {CustomHeader} from 'publish/CustomHeader';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {UserImageAndName} from 'user/UserImageAndName';
import {useUserById} from 'common/UsersByIdContext';
import {auth} from 'auth/auth';
import {useObserver} from 'mobx-react-lite';

export function ChatScreen({route}) {
  const {user: userParam, chat, userId} = route.params;

  if (!chat.messages) {
    chat.messages = [];
  }
  if (!chat.sendingMessages) {
    chat.sendingMessages = {};
  }

  const chatId = chat?._id;

  const {getUserById} = useUserById();
  const userById = getUserById(userId);

  const user = userParam || userById;

  async function getMessages() {
    if (chat) {
      try {
        const res = await api.get('chat-messages/' + chatId);
        chat.messages = res.data;
      } catch (err) {
        console.error(err.response);
      }
    }
  }

  useEffect(() => {
    getMessages();
    return getMessages;
  }, []);

  function renderItem({item: message}) {
    return (
      <Message
        key={message?.id}
        message={message}
        fromUser={auth.userId === message.userId}
        // moreMargin={actualLastUserId !== message.userId}
      />
    );
  }

  function isFromThisChat(message) {
    return (
      (!!message.chatId && message.chatId === chatId) ||
      (!!message.toUserId && message.toUserId === userId)
    );
  }

  return useObserver(() => {
    const renderMessages = Object.values(chat.sendingMessages)
      .filter(isFromThisChat)
      .reverse()
      .concat(chat.messages);

    return (
      <View style={styles.screen}>
        <CustomHeader
          left={<BackButton />}
          center={<UserImageAndName image={user?.image} name={user?.name} />}
        />
        <FlatList inverted data={renderMessages} renderItem={renderItem} />
        <MessageInput chatId={chatId} toUserId={userId} chat={chat} />
      </View>
    );
  });
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  pad: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
