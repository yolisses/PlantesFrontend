import React from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {useChatsContext} from './ChatsContext';
import {useChatRoom} from './ChatroomsContext';

export function ChatsListScreen() {
  const {chatRooms} = useChatRoom();

  const renderItem = ({item}) => <ChatListItem key={item} item={item} />;

  const messageCountHigher = (a, b) => a.message_count < b.message_count;

  return (
    <FooterNavigationLayout selected="ChatsList">
      {chatRooms ? (
        <FlatList
          data={Object.entries(chatRooms)
            .sort(messageCountHigher)
            .map(entry => entry[1])}
          renderItem={renderItem}
        />
      ) : null}
    </FooterNavigationLayout>
  );
}
