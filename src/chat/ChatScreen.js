import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {useObserver} from 'mobx-react-lite';

import {auth} from 'auth/auth';
import {Message} from './Message';
import {MessageInput} from './MessageInput';
import {BackButton} from 'publish/BackButton';
import {CustomHeader} from 'publish/CustomHeader';
import {UserImageAndName} from 'user/UserImageAndName';
import {api} from 'api/api';
export function ChatScreen({route}) {
  const {chat} = route.params;

  function renderItem({item}) {
    return (
      <Message
        key={item.id}
        message={item}
        fromUser={auth.userId === item.userId}
        // moreMargin={actualLastUserId !== message.userId}
      />
    );
  }

  async function getMessages() {
    try {
      const res = await api.get('/chatmessages/' + chat._id);
      chat.messages = res.data;
    } catch (err) {
      console.error(err.response);
    }
  }

  useEffect(() => {
    getMessages();
  }, []);

  return useObserver(() => (
    <View style={styles.screen}>
      <CustomHeader left={<BackButton />} center={<UserImageAndName />} />
      <FlatList inverted data={chat.messages} renderItem={renderItem} />
      <MessageInput />
    </View>
  ));
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
