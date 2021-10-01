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
  const [chat, setChat] = useState(chatParam);

  if (chat && !chat?.messages) {
    chat.messages = [];
  }
  if (chat && !chat?.sendingMessages) {
    chat.sendingMessages = {};
  }

  const chatId = chat?._id;
  const userId = user?._id;

  async function getMessages() {
    try {
      const res = await api.get('chat-messages/' + chatId);
      chat.messages = res.data;
    } catch (err) {
      console.error(err.response);
    }
  }

  async function getChat() {
    try {
      const res = await api.post('private-chat-by-user', {userId});
      const chat = res.data;
      chatsData.chats[chat._id] = chat;
    } catch (err) {
      console.error(err.response);
    }
  }

  function load() {
    if (!chat) {
      getChat();
    } else {
      getMessages();
    }
  }

  useEffect(() => {
    load();
  }, [chat]);

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
        <MessageInput
          chatId={chatId}
          toUserId={userId}
          chat={chatsData.chats[chatId]}
        />
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
