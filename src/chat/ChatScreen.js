import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Message} from 'chat/Message';
import {MessageInput} from 'chat/MessageInput';
import {api} from 'api';
import {CustomHeader} from 'publish/CustomHeader';
import {useUserContext} from 'auth/userContext';
import {BackButton} from 'publish/BackButton';
import {UserImageAndName} from 'user/UserImageAndName';
import {FlatList} from 'react-native-gesture-handler';

export function ChatScreen({route}) {
  const {item} = route.params;
  const {user} = useUserContext();

  const [messages, setMessages] = useState(null);

  async function getMessages() {
    try {
      const res = await api.get('chatmessages/' + item?._id);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => getMessages(), []);

  function renderItem({item: message}) {
    return (
      <Message
        key={message.id}
        item={message}
        fromUser={message.userId === user._id}
        // moreMargin={actualLastUserId !== message.userId}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <CustomHeader
        left={<BackButton />}
        center={<UserImageAndName id={item?.users[1]} />}
      />
      <Text>{JSON.stringify(item)}</Text>
      <FlatList data={messages} renderItem={renderItem} />
      <MessageInput chatId={item?._id} />
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
