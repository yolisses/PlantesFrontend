import React from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {useChatsContext} from './ChatsContext';

export function ChatsListScreen() {
  const {chats} = useChatsContext();

  const renderItem = ({item}) => <ChatListItem key={item} item={item} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return (
    <FooterNavigationLayout selected="ChatsList">
      {chats ? (
        <FlatList
          data={chats.sort(messageCountHigher)}
          renderItem={renderItem}
        />
      ) : null}
    </FooterNavigationLayout>
  );
}
