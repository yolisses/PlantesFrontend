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
import {messages} from './messages';

export function ChatScreen({route}) {
  const {user: userParam, userId} = route.params;

  const {getUserById} = useUserById();
  const userById = getUserById(userId);

  const user = userParam || userById;

  async function getMessages() {
    if (chat) {
      try {
        const res = await api.get('chatmessages/' + chatId);
        messages.cleanAddedMessages();
        Object.assign(messages.messages, res.data);
      } catch (err) {
        console.error(err.response);
      }
    }
  }

  useEffect(() => {
    if (auth.token) {
      getMessages();
      return getMessages;
    }
  }, []);

  function renderItem({item: message}) {
    return (
      <Message
        key={message.id}
        message={message}
        fromUser={auth.userId === message.userId}
        // moreMargin={actualLastUserId !== message.userId}
      />
    );
  }

  function newer(a, b) {
    return a.createdAt < b.createdAt;
  }

  function isFromThisChat(message) {
    return (
      (!!message.chatId && message.chatId === chatId) ||
      (!!message.toUserId && message.toUserId === userId)
    );
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        left={<BackButton />}
        center={<UserImageAndName image={user?.image} name={user?.name} />}
      />
      <FlatList inverted data={messages} renderItem={renderItem} />
      <MessageInput chatId={} toUserId={userId} />
    </View>
  );
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
