import React, {useEffect} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';

import {useObserver} from 'mobx-react-lite';

import {auth} from 'auth/auth';
import {Message} from './Message';
import {MessageInput} from './MessageInput';
import {BackButton} from 'publish/BackButton';
import {CustomHeader} from 'publish/CustomHeader';
import {UserImageAndName} from 'user/UserImageAndName';
import {api} from 'api/api';
import {chats} from './chats';

export function ChatScreen({route}) {
  function renderItem({item}) {
    return (
      <Message
        key={item._id}
        message={item}
        fromUser={auth.userId === item.userId}
      />
    );
  }
  const {
    chat: {_id: id},
  } = route.params;

  async function getMessages() {
    try {
      const res = await api.get('/chatmessages/' + chats[id]._id);
      chats[id].messages = res.data;
    } catch (err) {
      console.error(err.response);
    }
  }

  console.error(chats[id].messages);

  // useEffect(() => {
  //   getMessages();
  // }, []);

  return useObserver(() => {
    return (
      <View style={styles.screen}>
        <CustomHeader left={<BackButton />} center={<UserImageAndName />} />
        <FlatList inverted data={chats[id].messages} renderItem={renderItem} />
        <Button title="refresh" onPress={getMessages} />
        <Button title="log" onPress={() => console.error(chats[id].messages)} />
        <MessageInput chat={chats[id]} />
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
