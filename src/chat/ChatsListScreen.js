import React from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {useChats} from './ChatsContext';

export function ChatsListScreen() {
  const {chats} = useChats();

  const renderItem = ({item: chat}) => <ChatListItem key={chat} chat={chat} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return (
    <FooterNavigationLayout selected="ChatsList">
      {chats ? (
        <FlatList
          data={Object.entries(chats)
            .sort(messageCountHigher)
            .map(entry => entry[1])}
          renderItem={renderItem}
        />
      ) : null}
    </FooterNavigationLayout>
  );
}
