import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Message} from 'chat/Message';
import {MessageInput} from 'chat/MessageInput';
import {api} from 'api';
import {CustomHeader} from 'publish/CustomHeader';
import {useUserContext} from 'auth/userContext';

export function ChatScreen({route}) {
  const {item} = route.params;
  const {user} = useUserContext();

  const [messages, setMessages] = useState(null);

  async function getMessages() {
    try {
      const res = await api.get('chatmessages/' + '614d0b5d76df7f9d6707fbdd');
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => getMessages(), []);

  let lastUserId = null;

  return (
    <View style={styles.screen}>
      <CustomHeader />
      <Text>{JSON.stringify(item)}</Text>
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
                  fromUser={message.userId === user._id}
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
