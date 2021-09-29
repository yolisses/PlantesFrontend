import React, {useEffect} from 'react';
import {FlatList} from 'react-native';

import {useObserver} from 'mobx-react-lite';

import {api} from 'api';
import {chats} from './chats';
import {ChatListItem} from 'chat/ChatListItem';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

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

  return useObserver(() => (
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
  ));
}
