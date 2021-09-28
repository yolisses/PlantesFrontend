import React from 'react';
import {FlatList} from 'react-native';

import {View} from 'react-native';
import {useChats} from './ChatsContext';
import {ChatListItem} from 'chat/ChatListItem';
import {CustomHeader} from 'publish/CustomHeader';

export function ChatsListScreen() {
  const {chats} = useChats();

  const renderItem = ({item: chat}) => <ChatListItem key={chat} chat={chat} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return (
    <View>
      <CustomHeader title="Conversas" />
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
