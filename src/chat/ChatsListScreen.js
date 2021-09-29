import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {chats} from './chats';
import {api} from 'api';

export function ChatsListScreen() {
  useEffect(() => {
    api
      .get('/chats')
      .then(res => {
        Object.assign(chats, res.data);
      })
      .catch(err => console.error(err.response));
  }, []);

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
