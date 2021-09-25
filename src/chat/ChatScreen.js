import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Message} from 'chat/Message';
import {MessageInput} from 'chat/MessageInput';
import {CustomHeader} from 'publish/CustomHeader';
import {BackButton} from 'publish/BackButton';
import {UserImageAndName} from 'user/UserImageAndName';
import {FlatList} from 'react-native-gesture-handler';
import {api} from 'api/api';
import {useUserContext} from 'auth/userContext';

export function ChatScreen() {
  const chat = {_id: '614e5e91bc8e4ff26a3346e2'};
  const user = {};

  const {user: currentUser, token} = useUserContext();

  const [messages, setMessages] = useState([]);

  async function getMessages() {
    try {
      const res = await api.get('chatmessages/' + chat._id);
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
        fromUser={
          message.status === 'sending' || currentUser._id === message.userId
        }
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
      <FlatList data={messages} renderItem={renderItem} />
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
