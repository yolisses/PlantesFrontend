import {api} from 'api';
import {Message} from 'chat/Message';
import {BackButton} from 'publish/BackButton';
import {MessageInput} from 'chat/MessageInput';
import React, {useEffect, useState} from 'react';
import {CustomHeader} from 'publish/CustomHeader';
import {FlatList} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {UserImageAndName} from 'user/UserImageAndName';
import {auth} from 'auth/auth';
import {useObserver} from 'mobx-react-lite';
import {chatsData} from './chats';

export function ChatScreen({route}) {
  const {user, chat: chatParam} = route.params;
  const userId = user?._id;

  function createFakeChat() {
    const fakeChat = {
      fake: true,
      _id: userId,
      private: true,
      creator: auth.userId,
      users: [auth.userId, userId],
    };
    chatsData.chats[fakeChat._id] = fakeChat;

    return fakeChat;
  }

  const [chat, setChat] = useState(chatParam || createFakeChat());
  const chatId = chat?._id;

  if (!chat?.messages) {
    chat.messages = [];
  }
  if (!chat?.sendingMessages) {
    chat.sendingMessages = {};
  }

  const getMessages = async () => {
    console.error('get messaages');
    try {
      const res = await api.get('chat-messages/' + chatId);
      chat.messages = res.data;
      console.error(res.data);
      console.error(chat);
    } catch (err) {
      console.error(err);
    }
  };

  async function getChat() {
    try {
      const res = await api.post('private-chat-by-user', {userId});
      const newChat = res.data;
      if (newChat) {
        chatsData.chats[newChat._id] = newChat;
        console.error(newChat);
        setChat(chatsData.chats[newChat._id]);
      }
    } catch (err) {
      console.error('sim', err);
    }
  }

  function load() {
    if (chat.fake) {
      getChat();
    } else {
      getMessages();
    }
  }

  useEffect(load, [chat]);

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

  return useObserver(() => {
    const renderMessages = Object.values(
      chatsData.chats[chatId]?.sendingMessages || {},
    )
      .reverse()
      .concat(chatsData.chats[chatId]?.messages || []);

    return (
      <View style={styles.screen}>
        <CustomHeader
          left={<BackButton />}
          center={<UserImageAndName image={user?.image} name={user?.name} />}
        />
        <FlatList inverted data={renderMessages} renderItem={renderItem} />
        <MessageInput toUserId={userId} chat={chat} />
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
