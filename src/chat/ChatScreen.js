import {api} from 'api';
import {Message} from 'chat/Message';
import {BackButton} from 'publish/BackButton';
import {MessageInput} from 'chat/MessageInput';
import React, {useEffect, useState} from 'react';
import {CustomHeader} from 'publish/CustomHeader';
import {FlatList} from 'react-native-gesture-handler';
import {Button, StyleSheet, View} from 'react-native';
import {UserImageAndName} from 'user/UserImageAndName';
import {useUserById} from 'common/UsersByIdContext';
import {auth} from 'auth/auth';
import {cleanAdtionalMessages, messagesData} from './messages';

export function ChatScreen({route}) {
  const {user: userParam, chat: chatParam, userId} = route.params;

  const [messages, setMessages] = useState([]);

  const [chat, setChat] = useState(chatParam);
  const chatId = chat?._id;

  const {getUserById} = useUserById();
  const userById = getUserById(userId);

  const user = userParam || userById;

  useEffect(() => {
    if (userId && !chatParam) {
      api
        .post('/private-chat-by-user', {userId})
        .then(res => {
          setChat(res.data);
        })
        .catch(err => console.error(err.response));
    }
  }, []);

  async function getMessages() {
    if (chat) {
      try {
        const res = await api.get('chat-messages/' + chatId);
        cleanAdtionalMessages();
        setMessages(res.data);
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

  const renderMessages = Object.values(messagesData.sendingMessages)
    .filter(isFromThisChat)
    .concat(Object.values(messagesData.adtionalMessages).sort(newer))
    .filter(isFromThisChat)
    .concat(messages);

  return (
    <View style={styles.screen}>
      <CustomHeader
        left={<BackButton />}
        center={<UserImageAndName image={user?.image} name={user?.name} />}
      />
      <FlatList inverted data={renderMessages} renderItem={renderItem} />
      <Button title="refresh" onPress={getMessages} />
      <MessageInput chatId={chatId} toUserId={userId} />
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
