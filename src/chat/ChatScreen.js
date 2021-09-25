import {api} from 'api/api';
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

export function ChatScreen() {
  const chat = {_id: '614e5e91bc8e4ff26a3346e2'};
  const user = {};

  const {user: currentUser, token} = useUserContext();

  const [messages, setMessages] = useState([]);

  const {sendingMessages, adtionalMessages, cleanAdtionalMessages} =
    useMessages();

  async function getMessages() {
    try {
      const res = await api.get('chatmessages/' + chat._id);
      cleanAdtionalMessages();
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (token) {
      getMessages();
      return getMessages;
    }
  }, [token]);

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

  return (
    <View style={styles.screen}>
      <CustomHeader
        left={<BackButton />}
        center={<UserImageAndName image={user?.image} name={user?.name} />}
      />
      {/* <Text>{JSON.stringify(sendingMessages)}</Text>
      <Text>{JSON.stringify(messages)}</Text> */}
      <FlatList
        data={messages
          .concat(Object.values(adtionalMessages))
          .concat(Object.values(sendingMessages))}
        renderItem={renderItem}
      />
      <Button title="refresh" onPress={getMessages} />
      <MessageInput chatId={chat._id} />
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
