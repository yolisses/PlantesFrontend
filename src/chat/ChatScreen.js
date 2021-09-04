import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Message} from 'chat/Message';
import {MessageInput} from 'chat/MessageInput';
import {api} from 'api';
import {useNavigation} from '@react-navigation/core';
import {ChatHeader} from './ChatHeader';

export function ChatScreen({route}) {
  const {item} = route.params;

  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: () => <ChatHeader item={item} />,
  });

  const [messages, setMessages] = useState(null);

  async function getMessages() {
    try {
      const res = await api.get('/chats/11');
      setMessages(res.data.messages);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => getMessages(), []);

  let lastUserId = null;

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.pad}>
          {messages &&
            messages.map(message => {
              const actualLastUserId = lastUserId;
              lastUserId = message.userId;
              return (
                <Message
                  key={message.id}
                  item={message}
                  moreMargin={actualLastUserId !== message.userId}
                />
              );
            })}
        </View>
      </ScrollView>
      <MessageInput chatId={item?.id} />
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
