import {api} from 'api';
import {Message} from 'chat/Message';
import {useMessages} from './MessagesContext';
import {BackButton} from 'publish/BackButton';
import {MessageInput} from 'chat/MessageInput';
import {useUserContext} from 'auth/userContext';
import React, {useEffect, useState} from 'react';
import {CustomHeader} from 'publish/CustomHeader';
import {FlatList} from 'react-native-gesture-handler';
import {Button, StyleSheet, View} from 'react-native';
import {UserImageAndName} from 'user/UserImageAndName';
import {useUserById} from 'common/UsersByIdContext';

export function ChatScreen({route}) {
  const {user: userParam, chat: chatParam, userId} = route.params;

  const {user: currentUser, token} = useUserContext();

  const [messages, setMessages] = useState([]);

  const {sendingMessages, adtionalMessages, cleanAdtionalMessages} =
    useMessages();

  const [chat, setChat] = useState(chatParam);
  const chatId = chat?._id;

  const {getUserById} = useUserById();
  const userById = getUserById(userId);

  const user = userParam || userById;

  useEffect(() => {
    if (userId && !chatParam) {
      api
        .post('/privatechatbyuser', {userId})
        .then(res => {
          setChat(res.data);
        })
        .catch(err => console.error(err.response));
    }
  }, [userId]);

  async function getMessages() {
    if (chat) {
      try {
        const res = await api.get('chatmessages/' + chatId);
        cleanAdtionalMessages();
        setMessages(res.data);
      } catch (err) {
        console.error(err.response);
      }
    }
  }

  useEffect(() => {
    if (token) {
      getMessages();
      return getMessages;
    }
  }, [token, chat]);

  function renderItem({item: message}) {
    return (
      <Message
        key={message.id}
        message={message}
        fromUser={currentUser._id === message.userId}
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

  const renderMessages = Object.values(sendingMessages)
    .filter(isFromThisChat)
    .concat(Object.values(adtionalMessages).sort(newer))
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
