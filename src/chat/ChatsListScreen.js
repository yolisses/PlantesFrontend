import React from 'react';
import {FlatList, View} from 'react-native';

import {useChats} from './ChatsContext';
import {ChatListItem} from 'chat/ChatListItem';

export function ChatsListScreen() {
  const {chats} = useChats();

  const renderItem = ({item: chat}) => <ChatListItem key={chat} chat={chat} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return (
    <View>
      {chats ? (
        <FlatList
          data={Object.entries(chats)
            .sort(messageCountHigher)
            .map(entry => entry[1])}
          renderItem={renderItem}
        />
      ) : null}
    </View>
  );
}
